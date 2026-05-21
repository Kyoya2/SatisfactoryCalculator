import game_data from "@/GameData.auto.mjs";
import {assert, any, reduce, map, fractionMax, formatFrac} from "@/Utils.mjs";
import {Graph, Node, Edge} from "@/Graph.mjs";
import {g_, SCNode} from "@/Common.mjs";

/** @import { GameObjectId, Recipe, CraftingObject } from "@/GameData.auto.mjs" */
/** @import { MyEdgeInfo } from "@/Common.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';


/**
 * Generates a basic graph according to the given products recipe.
 * The graph mainly describes relationships between different ingredients, and doesn't
 * hold other information.
 * @param {GameObjectId} product_name 
 * @returns {Node<SCNode, MyEdgeInfo>} The product node
 */
function generateBaseGraph(product_name) {
    /** @type {Graph<SCNode, MyEdgeInfo>} */
    let graph = new Graph(((edge) => !edge.data.is_byproduct));

    /** @type {Map<GameObjectId, Node<SCNode, MyEdgeInfo>>} */
    let nodes = new Map();

    // byproducts[id1] -> A map containing all nodes that preoduce "id1" as a byproduct.
    // byproducts[id1][id2] -> The amount of byproduct "id1" produced from a production of a single "id2"
    /** @type {Map<GameObjectId, Map<GameObjectId, Fraction>>} */
    let byproducts = new Map();

    /**
     * Calculates only the layout of the graph for the currently selected product
     * @param {GameObjectId} product_id
     * @returns {Node<SCNode, MyEdgeInfo>}
     */
    function _generateGraphLayout(product_id) {
        let node = nodes.get(product_id);
        if (undefined !== node)
            return node;

        /** @type {CraftingObject} */
        const obj = game_data.crafting_objects[product_id];

        const is_trivial = g_.config.trivial_resources.has(product_id);
        let selected_recipe;
        let selected_recipe_index = -1;
        if (!is_trivial) {
            selected_recipe_index = g_.config.alternate_recipes.get(product_id);
            if (undefined === selected_recipe_index) {
                // "game_data" is generated such that non-alternate recipes are always before
                // alternate recipes.
                assert(obj !== undefined);
                assert(obj.recipes.findIndex(recipe_id => !game_data.recipes[recipe_id].is_alternate) <= 0);
                selected_recipe_index = 0;
            }

            selected_recipe = game_data.recipes[obj.recipes[selected_recipe_index]];
        }

        // "selected_recipe_index" is set here because it directly affects the structure of the graph
        node = graph.createNode(new SCNode(
            product_id,
            false,
            selected_recipe_index
        ));

        nodes.set(product_id, node)

        if (undefined !== selected_recipe) {
            const product_amount = selected_recipe.products[product_id];
            for (const [ingredient_id, amount] of Object.entries(selected_recipe.ingredients)) {
                const ingredient_node = _generateGraphLayout(ingredient_id);
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
                for (const [byproduct_id, amount] of Object.entries(selected_recipe.products)) {
                    if (product_id == byproduct_id)
                        continue;

                    let byproduct_producers = byproducts.get(byproduct_id);
                    if (undefined === byproduct_producers) {
                        byproduct_producers = new Map();
                        byproducts.set(byproduct_id, byproduct_producers);
                    }

                    // Since we iterate over each product once, it shouldn't yet be registered
                    // as a producer of the current byproduct
                    assert(!byproduct_producers.has(product_id));

                    byproduct_producers.set(product_id, mathjs.divide(amount, product_amount));
                }
            }
        }

        return node;
    }

    const product_node = _generateGraphLayout(product_name);

    for (const [byproduct_id, producers] of byproducts.entries()) {
        // If the byproduct is not used anywhere in the recipe tree, create a node for it
        let byproduct_node = nodes.get(byproduct_id);
        if (undefined === byproduct_node) {
            byproduct_node = graph.createNode(new SCNode(
                byproduct_id,
                true
            ));
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

        for (const [target_node, data] of node.flinks()) {
            if (data.is_byproduct) 
                continue;

            assert(0 != node.data.total_production_required.n);
            data.total_fraction = mathjs.divide(data.production_required, node.data.total_production_required);
        }

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
 */
function calculateGraphByproducts(product_node) {
    /**
     * Updates the "production_required" field of the current node to the given value, and propagates
     * the change upwards.
     * Does not modify byproducts, this will be handled by "_updateByproduct".
     * @param {Node<SCNode, MyEdgeInfo>} target_node 
     * @param {Fraction} new_production_required
     * @returns {boolean} - Whether the production of the given node was changed
     */
    function _updateProduction(target_node, new_production_required) {
        // If the production of this node has changed, propagate the modification upwards to update required
        // productions for producing the current node's product.
        if (mathjs.equal(target_node.data.production_required, new_production_required))
            return false;

        const proportional_prod_multiplier = mathjs.divide(new_production_required, target_node.data.production_required);
        target_node.data.production_required = new_production_required;

        for (const [parent_node, parent_data] of target_node.blinks()) {
            // Skip byproduct edges, they will be handled by "_updateByproduct"
            if (parent_data.is_byproduct)
                continue;

            assert(!parent_data.is_byproduct);

            // Edge production is updated proportionally
            const new_production_required = mathjs.multiply(parent_data.production_required, proportional_prod_multiplier);
            const absolute_prod_diff = mathjs.subtract(parent_data.production_required, new_production_required);
            parent_data.production_required = new_production_required;

            // Parent node production is updated absolutely.
            // The thing that logically changed here is the production that doesn't include byproduct, which is
            // contained both in "total_production_required" and "production_required", so we update both of them.
            // Note: "production_required" is updated in the next recursive call.
            parent_node.data.total_production_required = mathjs.subtract(parent_node.data.total_production_required, absolute_prod_diff);

            _updateProduction(parent_node, mathjs.subtract(parent_node.data.production_required, absolute_prod_diff));
        }

        return true;
    }

    /**
     * @param {Node<SCNode, MyEdgeInfo>} source_node 
     * @returns {boolean}
     */
    function _updateByproduct(source_node) {
        let modified = false;

        let total_byproduct_prod = fraction(0);
        let is_byproduct = false;
        for (const [parent_node, data] of source_node.blinks()) {
            if (!data.is_byproduct)
                continue

            is_byproduct = true;

            // Byproducts produced by the current parent node
            const byproduct_production = mathjs.multiply(parent_node.data.production_required, data.amount);
            if (!mathjs.equal(data.production_required, byproduct_production))
                modified = true;

            data.production_required = byproduct_production;

            // Add to the total
            total_byproduct_prod = mathjs.add(total_byproduct_prod, byproduct_production);
        }

        if (!is_byproduct) {
            // The node isn't being produced as a byproduct, nothing to do here.
            assert(!modified)
            return false;
        }

        // Recalculate fractions
        if (modified) {
            for (const [parent_node, data] of source_node.blinks()) {
                if (!data.is_byproduct)
                    continue

                data.total_fraction = mathjs.divide(data.production_required, total_byproduct_prod);
            }
        }

        if (source_node.data.isPureByproduct()) {
            // For "pure" byproducts, we want to display the total production value of the byproducts.
            // Pure byproducts don't affect anything, their production can simply be updated without
            // causing recalculation of anything else
            source_node.data.production_required = total_byproduct_prod;
            return;
        }

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
                modified = _updateByproduct(target_node) || modified;
        }

        return modified;
    }

    // Updating byproducts may require multiple iterations over the graph.
    // Keep iterating until we're able to complete an iteration without making changes.
    while (reduce(product_node.graph.nodes(), (modified, node) => (_updateByproduct(node) || modified), false));
}

export default function generateGraphData(product_name) {
    const product_node = generateBaseGraph(product_name);
    
    calculateGraphProductionRates(product_node);

    calculateGraphByproducts(product_node);

    return product_node;
}
