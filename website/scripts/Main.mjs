// @ts-check

// Docs:
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/
// https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html
// https://mathjs.org/docs/datatypes/fractions.html


import game_data from "./GameData.auto.mjs";
import {assert, any, reduce, map, fractionMax, formatFrac} from "./Utils.mjs";
import {Graph, Node, Edge} from "./Graph.mjs";
import {g_, selectedRecipe, singleMachineProduction, machinesRequired, getNodeProductionPerMinute} from "./Common.mjs";
import initApp from "./Init.mjs";
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "./GameData.auto.mjs" */
/** @import { MyNodeInfo, MyEdgeInfo } from "./Common.mjs" */

import mermaid from "mermaid";
import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';

/**
 * @param {Graph<MyNodeInfo, MyEdgeInfo>} graph 
 * @returns {[string, Node<MyNodeInfo, MyEdgeInfo>[], Edge<MyNodeInfo, MyEdgeInfo>[]]}
 */
function to_mermaid(graph) {
    let ordered_nodes = [...graph.nodes()];
    let ordered_edges = [...graph.links()];

    let result = "flowchart-elk TD\n";

    for (const node of ordered_nodes) {
        const data = node.data;
        result += `${data.obj.id}["$AAAAAAAAAAAAAAAAAA<br/><br/><br/><br/>"]\n`;
    }

    result += '\n';

    for (const edge of ordered_edges) {
        result += `${edge.source.data.obj.id}--AAAAAAAAA</br>AAAAAAAAA-->${edge.target.data.obj.id}\n`;
    }

    return [result, ordered_nodes, ordered_edges];
}

/**
 * @param {SVGGElement} node_svg_element 
 * @param {Node<MyNodeInfo, MyEdgeInfo>} node
 */
function createNodeOverlay(node_svg_element, node) {
    // Clone the template
    const clone = g_.html_elements.nodeOverlayTemplate.content.cloneNode(true);
    assert(1 == clone.childElementCount);

    /** @type {HTMLDivElement} */
    const overlay = clone.firstChild;
    node.data.html = overlay;

    const obj = node.data.obj;

    if (null !== node.data.trivial_prod) {
        overlay.style.backgroundColor = 'lightblue';
    }
    else if (g_.product_node == node) {
        overlay.style.backgroundColor = 'pink';
    }

    // Initialize labels
    overlay.querySelector('.node-item-name').textContent = obj.name;

    // Initialize image
    overlay.querySelector('.node-icon').src = `images/game_icons/${node.data.obj.id}.png`;

    //
    // Initialize alternate recipes select, or remove if there are none
    //
    if ((null !== node.data.trivial_prod) || (obj.recipes.length <= 1)) {
        overlay.querySelector(".node-alternate-recipes").remove();
    } else {
        let recipe_index = g_.config.alternate_recipes.get(obj.id);
        if (undefined === recipe_index)
            recipe_index = 0;

        /** @type {HTMLSelectElement} */
        const alternate_recipes_select = overlay.querySelector(".node-alternate-recipes > select");
        for (let i = 0; i < obj.recipes.length; ++i) {
            alternate_recipes_select.add(new Option(obj.recipes[i].name));
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
    
    // Position the "foregnObject" over the node
    const rect = node_svg_element.getBBox({fill: true, stroke: true, markers: true, clipped: false});
    foreign_obj.setAttribute("x", rect.x-2);
    foreign_obj.setAttribute("y", rect.y-2);
    foreign_obj.setAttribute("width", rect.width+4);
    foreign_obj.setAttribute("height", rect.height+4);

    node_svg_element.appendChild(foreign_obj);
}

/**
 * @param {SVGForeignObjectElement} edge_label_element 
 * @param {Edge<MyNodeInfo, MyEdgeInfo>} edge
 */
function createEdgeOverlay(edge_label_element, edge) {
    // Clone the template
    const clone = g_.html_elements.edgeOverlayTemplate.content.cloneNode(true);
    assert(1 == clone.childElementCount);

    /** @type {HTMLDivElement} */
    const overlay = clone.firstChild;
    edge.data.html = overlay;

    edge_label_element.replaceChildren(overlay);
}

/**
 * Regenerates the entire graph. Should only be called if the structure of the graph was changed.
 */
export async function generateGraphPhase1() {
    /** @type {Graph<MyNodeInfo, MyEdgeInfo>} */
    let graph = new Graph();

    /** @type {Map<GameObjectId, Node<MyNodeInfo, MyEdgeInfo>>} */
    let nodes = new Map();

    /**
     * Calculates only the layout of the graph for the currently selected product
     * @param {GameObjectId} object_id
     * @returns {Node<MyNodeInfo, MyEdgeInfo>}
     */
    function _generateGraphLayout(object_id) {
        let node = nodes.get(object_id);
        if (undefined !== node)
            return node;

        /** @type {CraftingObject} */
        const obj = game_data.crafting_objects[object_id];

        const trivial_prod = g_.config.trivial_resources.get(object_id) ?? null;
        let selected_recipe;
        let selected_recipe_index = -1;
        if (null === trivial_prod) {
            selected_recipe_index = g_.config.alternate_recipes.get(object_id);
            if (undefined === selected_recipe_index) {
                // "game_data" is generated such that non-alternate recipes are always before
                // alternate recipes.
                assert(obj !== undefined);
                assert(obj.recipes.findIndex(recipe => !recipe.is_alternate) <= 0);
                selected_recipe_index = 0;
            }

            selected_recipe = obj.recipes[selected_recipe_index];
        }
        
        // "selected_recipe_index" and "trivial_prod" are set here because they directly affect
        // the structure of the graph
        node = graph.createNode({
            obj: obj,
            selected_recipe_index: selected_recipe_index,
            total_production_required: fraction(0),
            trivial_prod: trivial_prod,
            html: null
        });

        nodes.set(object_id, node)

        if (undefined !== selected_recipe) {
            for (const ingredient of selected_recipe.ingredients) {
                const ingredient_node = _generateGraphLayout(ingredient.item_name);
                node.add_blink(
                    ingredient_node,
                    {
                        amount: ingredient.amount,
                        production_required: fraction(0),
                        total_fraction: fraction(0),
                        minimal_transporter_index: -1,
                        path_element: null,
                        html: null
                    }
                );
            }
        }

        return node;
    }

    g_.product_node = _generateGraphLayout(g_.config.product_name);

    // TODO: this function relies on the assumption that the SVG elements appear in the order that
    //       they were declared in the Mermaid string. Check this!
    const [graph_mermaid, ordered_nodes, ordered_edges] = to_mermaid(g_.product_node.graph);
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
        const current_edge = ordered_edges[i];
        current_edge.data.path_element = edge_path_svg_elements[i];
        createEdgeOverlay(edge_label_svg_elements[i], current_edge);
    }

    // Trigger the next phase
    generateGraphPhase2();
}

/**
 * Calculates optimal stats according to the current configuration.
 * Should only be called if some configuration that doesn't affect the graph's structure was changed.
 */
export function generateGraphPhase2() {
    // Set the required production to the production of one machine
    g_.product_node.data.total_production_required = singleMachineProduction(g_.product_node.data);

    // Breadth-first search starting from the product
    for (const node of g_.product_node.graph.smartBreadthFirst(false)) {
        /*
        if (null === node.data.trivial_prod) {
            /** @type {Fraction}
            const conveyor_speed = game_data.transporters.conveyor_belts[g_.config.conveyor_speed_index].speed;

            /** @type {Fraction}
            const pipeline_speed = game_data.transporters.pipelines[g_.config.pipeline_speed_index].speed;
            // Factor in the time it takes to load the ingredients onto the machine.
            // Assuming that ingredients are loaded into the machine as a product is being produced,
            // this makes a difference only if the load time is higher than the production
            let slowest_loaded_ingredient = {index: null, load_time: fraction(0)};
            for (let i = 0; i < selected_recipe.ingredients.length; ++i) {
                const ingredient = selected_recipe.ingredients[i];

                // The time it takes to load 1 unit
                const load_1_time = ('SOLID' == game_data.crafting_objects[ingredient.item_name].form) ? conveyor_speed : pipeline_speed;

                // The time it takes to load the number of units that are required for the product
                const total_load_time = multiply(ingredient.amount, load_1_time);

                if (smaller(slowest_loaded_ingredient.load_time, total_load_time)) {
                    slowest_loaded_ingredient.load_time = total_load_time;
                    slowest_loaded_ingredient.index = i;
                }
            }

            node.data.production_duration = fractionMax(selected_recipe.duration, slowest_loaded_ingredient.load_time);
        }
        */

        // Since we're doing a smart search, we know that we already visited all the target nodes.
        // So, we can reliably calculate the total required production.
        for (const [target_node, data] of node.flinks()) {
            node.data.total_production_required = mathjs.add(node.data.total_production_required, data.production_required);
        }

        for (const [target_node, data] of node.flinks()) {
            assert(0 != node.data.total_production_required.n);
            data.total_fraction = mathjs.divide(data.production_required, node.data.total_production_required);
        }

        if (null === node.data.trivial_prod) {
            // Calculate the required production rate of each input
            for (const [source_node, data] of node.blinks()) {
                data.production_required = mathjs.multiply(node.data.total_production_required, data.amount);
            }
        }
    }

    updateDisplayMultiplierAuto();
    // Called by "updateDisplayMultiplierAuto"
    //updateOverlay();

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
        node.data.html.querySelector('.production-rate-label').textContent = `${formatFrac(applyDisplayMultiplier(getNodeProductionPerMinute(node.data)), false)}/m`;
    
        if (null === node.data.trivial_prod) {
            node.data.html.querySelector('.machines-required-label').textContent = formatFrac(applyDisplayMultiplier(machinesRequired(node.data)), false);
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
        g_.config.alternate_recipes.entries(),
        ([obj_id, selected_recipe_index]) => game_data.crafting_objects[obj_id].recipes[selected_recipe_index].is_alternate
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
        (node) => (null === node.data.trivial_prod) ? machinesRequired(node.data).d : 1
    ))

    g_.html_elements.displayMultiplierInput.value = computed_lcm.toString();
    updateDisplayMultiplier();
}

initApp();
