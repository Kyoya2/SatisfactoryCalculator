import game_data from "@/GameData/GameData.mjs";
import {assert, any, all, reduce, map, formatFrac} from "@/Utils.mjs";
import {Graph, Node, Edge} from "@/Graph.mjs";
import {g_, SCNode} from "@/Common.mjs";

/** @import { GameObjectId, Recipe, CraftingObject } from "@/GameData/GameData.mjs" */
/** @import { MyEdgeInfo } from "@/Common.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';

/**
 * Calculates the fraction values for non-byproduct edges of a given node
 * @param {Node<SCNode, MyEdgeInfo>} node
 */
function calculateOutputFractions(node) {
    for (const [target_node, data] of node.flinks()) {
        if (data.is_byproduct) 
            continue;

        assert(0 != node.data.total_production_required.n);
        data.total_fraction = mathjs.divide(data.production_required, node.data.total_production_required);
    }
}

/**
 * Generates a basic graph according to the given products recipe.
 * The graph mainly describes relationships between different ingredients, and doesn't
 * hold other information.
 * @param {CraftingObject} product
 * @returns {Node<SCNode, MyEdgeInfo>} The product node
 */
function generateBaseGraph(product) {
    /** @type {Graph<SCNode, MyEdgeInfo>} */
    let graph = new Graph(((edge) => !edge.data.is_byproduct));

    /** @type {Map<GameObjectId, Node<SCNode, MyEdgeInfo>>} */
    let nodes = new Map();

    // byproducts[id1] -> A map containing all nodes that produce "id1" as a byproduct.
    // byproducts[id1][id2] -> The amount of byproduct "id1" produced from a production of a single "id2"
    /** @type {Map<GameObjectId, Map<GameObjectId, Fraction>>} */
    let byproducts = new Map();

    /**
     * Calculates only the layout of the graph for the currently selected product
     * @param {CraftingObject} product
     * @returns {Node<SCNode, MyEdgeInfo>}
     */
    function _generateGraphLayout(product) {
        let node = nodes.get(product.id);
        if (undefined !== node)
            return node;

        const is_trivial = g_.config.trivial_resources.has(product.id);
        let selected_recipe;
        if (!is_trivial) {
            selected_recipe = g_.config.alternate_recipes.get(product.id);
            if (undefined === selected_recipe) {
                // "game_data" is generated such that non-alternate recipes are always before
                // alternate recipes.
                assert(product.recipes.findIndex(recipe => !recipe.is_alternate) <= 0);
                selected_recipe = product.recipes[0];
            }
        }

        node = graph.createNode(new SCNode(product, false));

        nodes.set(product.id, node)

        if (undefined !== selected_recipe) {
            const product_amount = selected_recipe.products.get(product.id);
            for (const [ingredient_id, amount] of selected_recipe.ingredients.entries()) {
                const ingredient_node = _generateGraphLayout(game_data.crafting_objects[ingredient_id]);
                node.add_blink(
                    ingredient_node,
                    {
                        is_byproduct: false,
                        amount: mathjs.divide(amount, product_amount),
                        production_required: fraction(0),
                        total_fraction: fraction(0),
                        path_element: null,
                        html: null
                    }
                );
            }

            if (g_.config.show_byproducts) {
                // Process byproducts of the selected recipe
                for (const [byproduct_id, amount] of selected_recipe.products.entries()) {
                    if (product.id == byproduct_id)
                        continue;

                    let byproduct_producers = byproducts.get(byproduct_id);
                    if (undefined === byproduct_producers) {
                        byproduct_producers = new Map();
                        byproducts.set(byproduct_id, byproduct_producers);
                    }

                    // Since we iterate over each product once, it shouldn't yet be registered
                    // as a producer of the current byproduct
                    assert(!byproduct_producers.has(product.id));

                    byproduct_producers.set(product.id, mathjs.divide(amount, product_amount));
                }
            }
        }

        return node;
    }

    const product_node = _generateGraphLayout(product);

    for (const [byproduct_id, producers] of byproducts.entries()) {
        // If the byproduct is not used anywhere in the recipe tree, create a node for it
        let byproduct_node = nodes.get(byproduct_id);
        if (undefined === byproduct_node) {
            byproduct_node = graph.createNode(new SCNode(game_data.crafting_objects[byproduct_id], true));
        }

        // Connect the byproduct node to all the nodes that produce it
        for (const [producer_id, amount] of producers.entries()) {
            byproduct_node.add_blink(
                nodes.get(producer_id),
                {
                    is_byproduct: true,
                    amount: amount,
                    production_required: fraction(0),
                    total_fraction: fraction(0),
                    path_element: null,
                    html: null
                }
            );
        }
    }

    return product_node;
}

/**
 * Calculates optimal production rates for nodes in the given graph.
 * Doesn't take byproducts into consideration.
 * @param {Node<SCNode, MyEdgeInfo>} product_node
 */
function calculateGraphProductionRates(product_node) {
    // Set the required production to the production of one machine
    product_node.data.total_production_required = product_node.data.isTrivial() ? fraction(0) : product_node.data.singleMachineProduction();

    // Breadth-first search starting from the product
    for (const node of product_node.graph.smartBreadthFirst(false)) {
        if (node.data.isPureByproduct())
            continue;

        // Since we're doing a smart search, we know that we already visited all the target nodes.
        // So, we can reliably calculate the total required production.
        for (const [target_node, data] of node.flinks()) {
            if (data.is_byproduct)
                continue;

            node.data.total_production_required = mathjs.add(node.data.total_production_required, data.production_required);
        }

        node.data.production_required = node.data.total_production_required;

        calculateOutputFractions(node);

        if (!node.data.isTrivial()) {
            // Calculate the required production rate of each input
            for (const [source_node, data] of node.blinks()) {
                if (data.is_byproduct)
                    continue;

                data.production_required = mathjs.multiply(node.data.total_production_required, data.amount);
            }
        }
    }
}

/**
 * Adjusts the existing production rates of nodes in the graph according to byproducts.
 * @param {Node<SCNode, MyEdgeInfo>} product_node 
 */
function calculateGraphByproducts(product_node) {
    /**
     * Updates the "production_required" field of the current node to the given value, and propagates
     * the change upwards.
     * Does not modify byproducts, this will be handled by "_updateByproduct".
     * @param {Node<SCNode, MyEdgeInfo>} target_node 
     * @param {Fraction} new_production_required
     * @param {boolean} remove_if_zero - Whether nodes whose new production evaluates to 0 should be removed.
     * @returns {boolean} - Whether the production of the given node was changed
     */
    function _updateProduction(target_node, new_production_required, remove_if_zero=false) {
        // If the production of this node has changed, propagate the modification upwards to update required
        // productions for producing the current node's product.
        if (mathjs.equal(target_node.data.production_required, new_production_required))
            return false;

        console.log(
            "Production of", target_node.data.obj().name,
            "was updated from", formatFrac(target_node.data.production_required, "decimal"),
            "to", formatFrac(new_production_required, "decimal")
        );

        const proportional_prod_multiplier = mathjs.divide(new_production_required, target_node.data.production_required);
        target_node.data.production_required = new_production_required;

        for (const [parent_node, parent_data] of target_node.blinks()) {
            // Skip byproduct edges, they will be handled by "_updateByproduct"
            if (parent_data.is_byproduct)
                continue;

            // Edge production is updated proportionally
            const new_production_required = mathjs.multiply(parent_data.production_required, proportional_prod_multiplier);
            const absolute_prod_diff = mathjs.subtract(parent_data.production_required, new_production_required);
            parent_data.production_required = new_production_required;

            // Parent node production is updated absolutely.
            // The thing that logically changed here is the production that doesn't include byproduct, which is
            // contained both in "total_production_required" and "production_required", so we update both of them.
            // Note: "production_required" is updated in the next recursive call.
            parent_node.data.total_production_required = mathjs.subtract(parent_node.data.total_production_required, absolute_prod_diff);

            _updateProduction(
                parent_node,
                mathjs.subtract(parent_node.data.production_required, absolute_prod_diff),
                remove_if_zero
            );
        }

        // Remove the node if its total required production is zero.
        // It's important that we check "total_production_required" and not "production_required", because if
        // "production_required" is zero while "total_production_required" is not, we want to convert the node
        // into a pure byproduct instead of deleting it. This is done in "_fixNegatives".
        if (remove_if_zero && mathjs.isZero(target_node.data.total_production_required))
        {
            console.log("Removing node", target_node.data.obj().name);
            target_node.remove();
        }

        return true;
    }

    /**
     * @param {Node<SCNode, MyEdgeInfo>} source_node
     * @param {boolean} remove_if_zero - Whether nodes whose new production evaluates to 0 should be removed.
     * @param {boolean} force_byproduct - Force evaluating the node as a byproduct node, even if it's no longer
     *  a byproduct. Set to "true" if the node used to be a byproduct, but no longer may be.
     * @returns {boolean}
     */
    function _updateByproduct(source_node, remove_if_zero=false, force_byproduct=false) {
        let modified = false;

        let total_byproduct_prod = fraction(0);
        let is_byproduct = force_byproduct;
        for (const [parent_node, data] of source_node.blinks()) {
            if (!data.is_byproduct)
                continue

            is_byproduct = true;

            // Byproducts produced by the current parent node
            const byproduct_production = mathjs.multiply(parent_node.data.production_required, data.amount);
            if (!mathjs.equal(data.production_required, byproduct_production)) {
                data.production_required = byproduct_production;
                modified = true;
            }

            // Add to the total
            total_byproduct_prod = mathjs.add(total_byproduct_prod, byproduct_production);
        }

        if (!is_byproduct) {
            // The node isn't being produced as a byproduct, nothing to do here.
            assert(!modified)
            return false;
        }

        console.log(source_node.data.obj().name, "is a byproduct");

        // Recalculate fractions
        if (modified) {
            for (const [parent_node, data] of source_node.blinks()) {
                if (!data.is_byproduct)
                    continue

                data.total_fraction = mathjs.divide(data.production_required, total_byproduct_prod);
            }
        }

        if (source_node.data.isPureByproduct()) {
            console.log(source_node.data.obj().name, "is a pure byproduct");

            // For "pure" byproducts, we want to display the total production value of the byproducts.
            // Pure byproducts don't affect anything, their production can simply be updated without
            // causing recalculation of anything else
            if (!mathjs.equal(source_node.data.production_required, total_byproduct_prod)) {
                source_node.data.production_required = total_byproduct_prod;
                modified = true;

                console.log("Updated production of", source_node.data.obj().name, "to", formatFrac(total_byproduct_prod, "decimal"));
            }
        } else {
            console.log(source_node.data.obj().name, "is not a non-pure byproduct");

            // For "non-pure" byproducts, we want to display the production that's required *additionally*
            // to the byproduct production
            const new_production_required = mathjs.subtract(source_node.data.total_production_required, total_byproduct_prod);

            if (!_updateProduction(source_node, new_production_required)) {
                // The byproduct production didn't change, no need to propagate the change to the children
                return modified;
            }

            // The production required has changed, which means that the production of all byproducts of this node
            // has also changed (if the node produces byproducts). Recalculate it.
            for (const [target_node, data] of source_node.flinks()) {
                if (data.is_byproduct)
                    modified = _updateByproduct(target_node, remove_if_zero) || modified;
            }
        }

        // Remove the node if its total required production is zero.
        // It's important that we check "total_production_required" and not "production_required", because if
        // "production_required" is zero while "total_production_required" is not, we want to convert the node
        // into a pure byproduct instead of deleting it. This is done in "_fixNegatives".
        if (remove_if_zero && mathjs.isZero(source_node.data.total_production_required))
        {
            console.log("Removing node", source_node.data.obj().name);
            source_node.remove();
        }

        return modified;
    }

    /**
     * Fixes negative production values caused by over-producing certain items from byproducts
     * @param {Node<SCNode, MyEdgeInfo>} node
     * @returns {boolean}
     */
    function _fixNegatives(node) {
        // Skip non-positive nodes
        if (mathjs.isPositive(node.data.production_required))
            return false;

        // Skip pure byproducts for the same reason as explained below
        if (node.data.isPureByproduct())
            return false;

        // If the node is not a byproduct, skip it even though its production is negative.
        // That's because the reason for this node being negative comes from another node
        // that we've yet to find. Once we find that node, the negative value of this node
        // will be fixed automatically.
        if (all(node.blinks(), ([_, data]) => !data.is_byproduct))
            return false;

        // If we reached here, it means that the current node is over-produced by byproducts.
        console.log(node.data.obj().name, "is an over-produced byproduct, converting to pure byproduct");

        // Convert the node to a pure byproduct.
        // Converting the negative to positive to indicate the over-production.
        node.data._is_pure_byproduct = true;
        node.data.production_required = mathjs.unaryMinus(node.data.production_required);
        
        // Remove products that are explicitly used for producing this item (there's no need due to
        // over-production of this item as a byproduct)
        for (const blink of node.blink_objs()) {
            if (blink.data.is_byproduct)
                continue;
            
            // Should be non-positive, since it's over-produced
            assert(!mathjs.isPositive(blink.data.production_required));

            // Remove the edge
            blink.remove();

            // Subtract the negative over-production from the source node's total production 
            blink.source.data.total_production_required = mathjs.subtract(blink.source.data.total_production_required, blink.data.production_required);

            // Recalculate fractions, since we remove one edge
            calculateOutputFractions(blink.source);

            // Same for the production that includes byproducts, and propagate the change upwards
            _updateProduction(
                blink.source,
                mathjs.subtract(blink.source.data.production_required, blink.data.production_required),
                true
            );
        }

        // Remove byproducts of the current item, since it's no longer produced using the recipe that
        // produces these byproducts.
        for (const flink of node.flink_objs()) {
            if (!flink.data.is_byproduct)
                continue;

            // Should be non-positive, since it's over-produced
            assert(!mathjs.isPositive(flink.data.production_required));

            flink.remove();

            // Force treating the node as a byproduct, since removing the current flink may
            // cause it to no longer look like a byproduct
            _updateByproduct(flink.target, true, true);
        }

        return true;
    }
    
    // Updating byproducts may require multiple iterations over the graph.
    // Keep iterating until we're able to complete an iteration without making changes.
    while (reduce(product_node.graph.nodes(), (modified, node) => (_updateByproduct(node) || modified), false));

    // Fix negative production values due to over-production of items as byproducts.
    // It's important to note that this logic is not a part of the loop above because this function can cause
    // the removal of nodes. We have to be absolutely sure that we want to remove a node before removing it,
    // since reverting the removal will be complicated. We can't be sure whether a node should be removed in
    // the loop above because it may require multiple iterations over the graph, during which a node may have
    // negative production for a short time, but in the next iteration it will be set back to a positive value.
    while (reduce(product_node.graph.nodes(), (modified, node) => (_fixNegatives(node) || modified), false));

    // Make sure that all negatives were fixed
    // Note: zeroes are fine!
    assert(all(product_node.graph.nodes(), (node) => !mathjs.isNegative(node.data.production_required)));
    assert(all(product_node.graph.links(), (link) => !mathjs.isNegative(link.data.production_required)));
}

/**
 * @param {CraftingObject} product 
 * @returns {Node<SCNode, MyEdgeInfo>}
 */
export default function generateGraphData(product) {
    const product_node = generateBaseGraph(product);
    
    calculateGraphProductionRates(product_node);

    calculateGraphByproducts(product_node);

    return product_node;
}
