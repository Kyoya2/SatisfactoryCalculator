// Docs:
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/
// https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html
// https://mathjs.org/docs/datatypes/fractions.html
import game_data from "@/GameData.auto.mjs";
import {assert, any, reduce, map, fractionMax, formatFrac} from "@/Utils.mjs";
import {Graph, Node, Edge} from "@/Graph.mjs";
import {g_, SCNode} from "@/Common.mjs";

/** @import { GameObjectId, Recipe, CraftingObject } from "@/GameData.auto.mjs" */
/** @import { MyEdgeInfo } from "@/Common.mjs" */

import mermaid from "mermaid";
import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';


/**
 * Returns the number of "lines" that should be reserved for a node overlay
 * @param {SCNode} node 
 * @returns {number}
 */
function estimateNodeOverlayHeight(node) {
    // Object name + icon + production
    let result = 3;

    if (!node.isPureByproduct()) {
        const num_recipes = node.recipes().length;
        if (!node.isTrivial()) {
            // Recipe selection
            if (num_recipes > 1)
                ++result;

            // Machines required
            ++result;
        }
        
        // "Trivial?" checkbox
        if (num_recipes > 0)
            ++result;
    }

    return result;
}

/**
 * @param {Graph<SCNode, MyEdgeInfo>} graph 
 * @param {number} stroke_width - stoke width in pixels
 * @returns {[string, Node<SCNode, MyEdgeInfo>[], Edge<SCNode, MyEdgeInfo>[]]}
 */
function toMermaid(graph, stroke_width) {
    let ordered_nodes = [...graph.nodes()];
    let ordered_edges = [...graph.links()];

    let result = "flowchart-elk TD\n";

    for (const node of ordered_nodes) {
        const overlay_height = estimateNodeOverlayHeight(node.data);

        // Sub 1 because we already have 1 line
        result += `${node.data.obj().id}["$AAAAAAAAAAAAAAAAAA${'<br/>'.repeat(overlay_height - 1)}"]\n`;
    }

    result += '\n';

    for (const edge of ordered_edges) {
        result += `${edge.source.data.obj().id}--AAAAAAAAA</br>AAAAAAAAA-->${edge.target.data.obj().id}\n`;
    }

    result += `linkStyle default stroke-width:${stroke_width}px;`;

    return [result, ordered_nodes, ordered_edges];
}

/**
 * @param {SVGGElement} node_svg_element 
 * @param {Node<SCNode, MyEdgeInfo>} node
 */
function createNodeOverlay(node_svg_element, node) {
    // Clone the template
    const clone = g_.html_elements.nodeOverlayTemplate.content.cloneNode(true);
    assert(1 == clone.childElementCount);

    /** @type {HTMLDivElement} */
    const overlay = clone.firstChild;
    node.data.html = overlay;

    const obj = node.data.obj();

    const is_trivial = node.data.isTrivial();
    const is_pure_byproduct = node.data.isPureByproduct();

    // A node can't be both trivial and a pure byproduct
    assert(!(is_pure_byproduct && is_trivial));

    if (is_trivial || is_pure_byproduct) {
        overlay.style.backgroundColor = is_trivial ? 'lightblue' : 'lightgreen';
        overlay.querySelector(".machines-required-container").remove();
    }
    else if (g_.product_node == node) {
        overlay.style.backgroundColor = 'pink';
    }

    // Initialize labels
    overlay.querySelector('.node-item-name').textContent = obj.name;

    // Initialize image
    overlay.querySelector('.node-icon').src = `images/game_icons/${obj.id}.png`;

    //
    // Initialize trivial checkbox
    //
    if ((0 == obj.recipes.length) || is_pure_byproduct) {
        // An object with no recipes is forced to be trivial (remove the option to change it)
        assert(is_trivial || is_pure_byproduct);
        overlay.querySelector(".is-trivial-container").remove();
    } else {
        /** @type {HTMLInputElement} */
        const trivial_checkbox = overlay.querySelector(".is-trivial-checkbox");
        trivial_checkbox.checked = is_trivial;
        trivial_checkbox.onclick = function(e) {
            if (e.target.checked)
                g_.config.trivial_resources.add(obj.id);
            else
                g_.config.trivial_resources.delete(obj.id);

            g_.config.notifyChange();
            generateGraphPhase1();
        }
    }

    //
    // Initialize alternate recipes select, or remove if there are none
    //
    if (is_trivial || is_pure_byproduct || (obj.recipes.length <= 1)) {
        overlay.querySelector(".node-alternate-recipes").remove();
    } else {
        let recipe_index = g_.config.alternate_recipes.get(obj.id);
        if (undefined === recipe_index)
            recipe_index = 0;

        /** @type {HTMLSelectElement} */
        const alternate_recipes_select = overlay.querySelector(".node-alternate-recipes > select");
        for (let i = 0; i < obj.recipes.length; ++i) {
            alternate_recipes_select.add(new Option(game_data.recipes[obj.recipes[i]].name));
        }

        alternate_recipes_select.selectedIndex = node.data.selected_recipe_index;
        
        alternate_recipes_select.oninput = function(e) {
            g_.config.alternate_recipes.set(obj.id, e.target.selectedIndex);
            generateGraphPhase1();
        };
    }

    // Inject a "foreignObject" element into the node
    const foreign_obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreign_obj.appendChild(overlay);
    
    // Position the "foreignObject" over the node
    const rect = node_svg_element.getBBox({fill: true, stroke: true, markers: true, clipped: false});
    foreign_obj.setAttribute("x", rect.x-2);
    foreign_obj.setAttribute("y", rect.y-2);
    foreign_obj.setAttribute("width", rect.width+4);
    foreign_obj.setAttribute("height", rect.height+4);

    node_svg_element.appendChild(foreign_obj);
}

/**
 * @param {SVGForeignObjectElement} edge_label_element 
 * @param {SVGPathElement} edge_path_element 
 * @param {Edge<SCNode, MyEdgeInfo>} edge
 */
function createEdgeOverlay(edge_label_element, edge_path_element, edge) {
    edge.data.path_element = edge_path_element;
    if (edge.data.is_byproduct) {
        edge_path_element.style.stroke = 'orange';
    }

    // Clone the template
    const clone = g_.html_elements.edgeOverlayTemplate.content.cloneNode(true);
    assert(1 == clone.childElementCount);

    /** @type {HTMLDivElement} */
    const overlay = clone.firstChild;
    edge.data.html = overlay;

    edge_label_element.replaceChildren(overlay);
}

/**
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

        return node;
    }

    const product_node = _generateGraphLayout(product_name);

    for (const [byproduct_id, producers] of byproducts.entries()) {
        const obj = game_data.crafting_objects[byproduct_id];

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
 * Regenerates the entire graph. Should only be called if the structure of the graph was changed.
 * @param {boolean} recalc_mult - Whether the display multiplier should be recalculated
 */
export async function generateGraphPhase1(recalc_mult=false) {
    g_.product_node = generateBaseGraph(g_.config.product_name);

    // TODO: this function relies on the assumption that the SVG elements appear in the order that
    //       they were declared in the Mermaid string. Check this!
    const [graph_mermaid, ordered_nodes, ordered_edges] = toMermaid(g_.product_node.graph, 2);
    const render_result = await mermaid.render('graphSvg', graph_mermaid);

    g_.html_elements.graphContainer.innerHTML = render_result.svg;

    /** @type {SVGElement} */
    const graph_svg = g_.html_elements.graphContainer.querySelector('#graphSvg');

    /** @type {NodeListOf<SVGGElement>} */
    const node_svg_elements = graph_svg.querySelectorAll('.nodes > g.node.default');

    /** @type {NodeListOf<SVGPathElement>} */
    const edge_path_svg_elements = graph_svg.querySelectorAll('.edges.edgePaths > path');

    /** @type {NodeListOf<SVGForeignObjectElement>} */
    const edge_label_svg_elements = graph_svg.querySelectorAll('.edgeLabels > g > g > foreignObject');

    assert(node_svg_elements.length == ordered_nodes.length);
    assert(edge_path_svg_elements.length == ordered_edges.length);
    assert(edge_label_svg_elements.length == ordered_edges.length);

    // Create overlays for the nodes and associate them with the relevant node objects
    for (let i = 0; i < ordered_nodes.length; ++i) {
        createNodeOverlay(node_svg_elements[i], ordered_nodes[i])
    }

    // Create edge overlays and associate them with the relevant edge objects.
    // Also associate the edge path.
    for (let i = 0; i < ordered_edges.length; ++i) {
        createEdgeOverlay(edge_label_svg_elements[i], edge_path_svg_elements[i], ordered_edges[i]);
    }

    // Reset the pan and zoom
    g_.panzoom.reset({ animate: false });

    // Trigger the next phase
    generateGraphPhase2(recalc_mult);
}

/**
 * Calculates optimal stats according to the current configuration.
 * Should only be called if some configuration that doesn't affect the graph's structure was changed.
 * @param {boolean} recalc_mult - Whether the display multiplier should be recalculated
 */
export function generateGraphPhase2(recalc_mult=false) {
    // Set the required production to the production of one machine
    g_.product_node.data.total_production_required = g_.product_node.data.singleMachineProduction();

    // Breadth-first search starting from the product
    for (const node of g_.product_node.graph.smartBreadthFirst(false)) {
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
            if (data.is_byproduct) {
                // TODO: There's no reason to display the "total_fraction" of byproducts to the user, since it's always 1.
                // Additionally, don't display the fraction if it's 1/1 (even for non-byproducts).
                data.total_fraction = fraction(1);
            } else {
                assert(0 != node.data.total_production_required.n);
                data.total_fraction = mathjs.divide(data.production_required, node.data.total_production_required);
            }
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
                if (data.is_byproduct)
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

    // TODO: add different color to byproduct nodes *and edges*
    // TODO: it's possible to get negative values using this method. When an ingredient
    //       is sufficiently produced as a byproduct, and there's no need to manually produce it

    // Updating byproducts may require multiple iterations over the graph.
    // Keep iterating until we're able to complete an iteration without making changes perform an iteration with no modifications.
    while (reduce(g_.product_node.graph.nodes(), (modified, node) => (_updateByproduct(node) || modified), false));

    if (recalc_mult)
        updateDisplayMultiplierAuto();
    else
        updateOverlay();

    // Trigger the next phase
    generateGraphPhase3();
}

/**
 * Calculates the machine configuration according to the current user config.
 * Should only be called if some configuration that doesn't affect the graph's structure was changed.
 */
function generateGraphPhase3() {

    
    //updateDisplayMultiplierAuto();
    // Called by "updateDisplayMultiplierAuto"
    //updateOverlay();
}

/**
 * @param {Fraction} frac 
 * @returns {Fraction}
 */
function applyDisplayMultiplier(frac) {
    return mathjs.multiply(frac, g_.config.display_multiplier);
}

function updateOverlay() {
    const graph = g_.product_node.graph;
    for (const node of graph.nodes()) {
        node.data.html.querySelector('.production-rate-label').textContent = `${formatFrac(applyDisplayMultiplier(node.data.productionPerMinute()), false)}/m`;

        if (!node.data.isTrivial() && !node.data.isPureByproduct()) {
            node.data.html.querySelector('.machines-required-label').textContent = formatFrac(applyDisplayMultiplier(node.data.machinesRequired()), false);
        }
    }

    for (const edge of graph.links()) {
        edge.data.html.querySelector('.edge-ratio-label').textContent = formatFrac(edge.data.total_fraction);
        edge.data.html.querySelector('.edge-production-label').textContent = `${formatFrac(applyDisplayMultiplier(mathjs.multiply(edge.data.production_required, 60)), false)}/m`;
    }
}

export function resetAlternateRecipes() {
    // Re-render only if a non-alternate recipe is currently selected
    const should_re_render_graph = any(
        g_.config.alternate_recipes.values(),
        (selected_recipe_index) => 0 != selected_recipe_index
    );

    g_.config.alternate_recipes.clear();
    g_.config.notifyChange();

    if (should_re_render_graph)
        generateGraphPhase1();
}

export function updateDisplayMultiplier() {
    g_.config.display_multiplier = fraction(g_.html_elements.displayMultiplierInput.value);
    g_.config.notifyChange();
    updateOverlay();
}

export function updateDisplayMultiplierAuto() {
    // Calculate the LCM of the denominators of all machines required.
    // This will yield a multiplier that, when applied, makes the "machines required" of all nodes
    // into a whole number.
    const computed_lcm = mathjs.lcm(...map(
        g_.product_node.graph.nodes(),
        (node) => (node.data.isTrivial() || node.data.isPureByproduct()) ? 1 : node.data.machinesRequired().d
    ))

    g_.html_elements.displayMultiplierInput.value = computed_lcm.toString();
    updateDisplayMultiplier();
}

// Must be last
import initApp from "@/Init.mjs";
initApp();
