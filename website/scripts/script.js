// @ts-check
// Docs:
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/
// https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html


import game_data from "./game_data.auto.mjs"
import {assert, any, reduce} from "./utils.mjs"
import {Graph, Node, Edge} from "./Graph.mjs"

// TODO: change "cytoscape.umd.js" to "cytoscape.min.js" on prod
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.esm.min.mjs';
import elkLayouts from "https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@latest/dist/mermaid-layout-elk.esm.min.mjs"
import {fraction, add, subtract, multiply, divide, smaller, format} from 'https://cdn.jsdelivr.net/npm/mathjs/+esm'

/**
 * Game data types:
 * @typedef {string} GameObjectName
 * @typedef {{item_name: GameObjectName, amount: fraction}} CountedItem
 * @typedef {{
 *      product_name: GameObjectName,
 *      ingredients: CountedItem[],
 *      duration: fraction,
 *      is_alternate: boolean,
 *      recipe_name: GameObjectName
 * }} Recipe
 * @typedef {{ClassName: GameObjectName, Name: string, recipes: Recipe[]}} GameObject
 * 
 * Program types:
 * @typedef {{
 *      obj: GameObject,
 *      selected_recipe_index: number,
 *      factored_recipe_duration: fraction,
 *      total_required_amount: fraction,
 *      total_machines_required: fraction,
 *      svg_element: *
 * }} MyNodeInfo
 * 
 *  @typedef {{
 *      amount: fraction,
 *      total_amount: fraction,
 *      total_fraction: fraction,
 *      svg_element: *
 * }} MyEdgeInfo
 */

/** 
 * @type {{
 *      objects: Object.<GameObjectName, GameObject>,
 *      craftable_objects: GameObjectName[],
 *      crafting_objects: GameObjectName[]
 * }}
 */
game_data;


var globals = Object.create(null);
globals.htmlElements = Object.create(null);
globalThis.satisfactoryCalculator = globals;


/**
 * @param {fraction} a 
 * @param {fraction} b 
 * @returns {fraction}
 */
function fractionMax(a, b) {
    if (smaller(a, b))
        return b;
    return a;
}

/**
 * 
 * @param {fraction} frac 
 * @returns {string}
 */
function formatFrac(frac) {
    return format(frac, { fraction: 'ratio' })
}

/**
 * @param {Graph<MyNodeInfo, MyEdgeInfo>} graph 
 * @returns {[string, Node<MyNodeInfo, MyEdgeInfo>[], Edge<MyNodeInfo, MyEdgeInfo>[]]}
 */
function to_mermaid(graph) {
    let ordered_nodes = [...graph.nodes()];
    let ordered_edges = [...graph.links()];

    let result = "flowchart-elk\n";

    for (const node of ordered_nodes) {
        const data = node.data;
        result += `${data.obj.ClassName}["${data.obj.Name}<br/>Duration=${formatFrac(data.factored_recipe_duration)}<br/>Total required=${formatFrac(data.total_required_amount)}<br/>Machines required=${formatFrac(data.total_machines_required)}"]\n`;
    }

    result += '\n';

    for (const edge of ordered_edges) {
        result += `${edge.source.data.obj.ClassName}--${formatFrac(edge.data.amount)}<br/>${formatFrac(edge.data.total_amount)}<br/>${formatFrac(edge.data.total_fraction)}-->${edge.target.data.obj.ClassName}\n`;
    }

    return [result, ordered_nodes, ordered_edges];
}

/**
 * Generates schematics for according to the current configuration.
 * Returns the root node (product).
 * @returns {Node<MyNodeInfo, MyEdgeInfo>=}
 */
function generateSchematic() {
    // Load state from HTML
    const product_name = globals.htmlElements.craftableItemSelect.value;
    const conveyor_speed = fraction(60, Number(globals.htmlElements.logisticsTierSelect.value));
    const trivial_objects = ["Desc_IronIngot_C", "Desc_CopperIngot_C"]; // TODO: make configurable

    // Don't do anything if selection is cleared
    if ("" == product_name)
        return;

    /** @type {Graph<MyNodeInfo, MyEdgeInfo>} */
    let graph = new Graph();

    /** @type {Map<GameObjectName, Node<MyNodeInfo, MyEdgeInfo>>} */
    let nodes = new Map();

    /**
     * @param {GameObjectName} object_name
     * @returns {Node<MyNodeInfo, MyEdgeInfo>}
     */
    function _generateSchematic(object_name) {
        let node = nodes.get(object_name);
        if (undefined !== node)
            return node;

        /** @type {GameObject} */
        const obj = game_data.objects[object_name];

        // By default, choose the first non-alternate recipe.
        // If only alternate recipes are available, choose the 1st one.
        let selected_recipe_index = obj.recipes.findIndex(recipe => !recipe.is_alternate);
        if (-1 == selected_recipe_index)
            selected_recipe_index = 0;

        const selected_recipe = obj.recipes[selected_recipe_index];

        // Factor in the time it takes to load the ingredients onto the constructor/assembler.
        // Assuming that ingredients are loaded into the machine as a product is being produced,
        // this makes a difference only if the load time is higher than the production
        const max_amount_ingredient = selected_recipe.ingredients.reduce((max, current) => fractionMax(max, current.amount), fraction(0));
        const factored_recipe_duration = fractionMax(selected_recipe.duration, multiply(max_amount_ingredient, conveyor_speed));

        node = graph.createNode({
            obj: obj,
            selected_recipe_index: selected_recipe_index,
            factored_recipe_duration: factored_recipe_duration,
            total_required_amount: 0,
            total_machines_required: 0,
            svg_element: null
        })

        nodes.set(object_name, node)

        if (trivial_objects.includes(object_name))
            return node;

        for (const ingredient of selected_recipe.ingredients) {
            const ingredient_node = _generateSchematic(ingredient.item_name);
            node.add_blink(
                ingredient_node,
                {
                    amount: ingredient.amount,
                    total_amount: 0,
                    total_fraction: 0,
                    svg_element: null
                }
            );
        }

        return node;
    }

    const product_node = _generateSchematic(product_name);
    product_node.data.total_required_amount = 1;

    const cycle_duration = product_node.data.factored_recipe_duration;

    // Breadth-first search starting from the product
    for (const node of product_node.graph.smartBreadthFirst(false)) {
        for (const [target_node, data] of node.flinks()) {
            data.total_amount = multiply(target_node.data.total_required_amount, data.amount);
            node.data.total_required_amount = add(node.data.total_required_amount, data.total_amount);
        }

        for (const [target_node, data] of node.flinks()) {
            data.total_fraction = divide(data.total_amount, node.data.total_required_amount);
        }

        const single_machine_production = divide(cycle_duration, node.data.factored_recipe_duration);
        node.data.total_machines_required = divide(node.data.total_required_amount, single_machine_production);
    }

    return product_node;
}

/**
 * 
 * @param {SVGGElement} node_svg_element 
 * @param {Node<MyNodeInfo, MyEdgeInfo>} node 
 * @returns {SVGForeignObjectElement}
 */
function createNodeOverlay(node_svg_element, node) {
    const rect = node_svg_element.getBBox();
    let foreign_obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreign_obj.setAttribute("x", rect.x);
    foreign_obj.setAttribute("y", rect.y);
    foreign_obj.setAttribute("width", rect.width);
    foreign_obj.setAttribute("height", rect.height);

    foreign_obj.innerHTML = `
        <div class="node-overlay">
            <p>
                ${node.data.obj.Name}<br/>
                Total required=${node.data.total_required_amount}<br/>
                Machines required=${node.data.total_machines_required}
            </p>
        </div>
    `;

    node_svg_element.appendChild(foreign_obj);

    return foreign_obj;
}

async function generateGraph() {
    globals.product_node = generateSchematic();
    if (!globals.product_node)
        return;

    const [graph_mermaid, ordered_nodes, ordered_edges] = to_mermaid(globals.product_node.graph);
    const render_result = await mermaid.render('graphSvg', graph_mermaid);

    globals.htmlElements.graphContainer.innerHTML = render_result.svg;

    return;

    globals.htmlElements.graphSvg = globals.htmlElements.graphContainer.querySelector('#graphSvg');

    const node_svg_elements = globals.htmlElements.graphSvg.querySelectorAll('.nodes > g.node.default');
    const edge_svg_elements = globals.htmlElements.graphSvg.querySelectorAll('.edges.edgePaths > path');

    assert(node_svg_elements.length == ordered_nodes.length);
    assert(edge_svg_elements.length == ordered_edges.length);

    const node_overlay_template = document.querySelector('#node-overlay-template');

    const svg_element = globals.htmlElements.graphSvg;
    for (let i = 0; i < ordered_nodes.length; ++i)
    {
        const rect = node_svg_elements[i].getBBox();
        let foreign_obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreign_obj.setAttribute("x", rect.x);
        foreign_obj.setAttribute("y", rect.y);
        foreign_obj.setAttribute("width", rect.width);
        foreign_obj.setAttribute("height", rect.height);

        foreign_obj.innerHTML = NODE_OVERLAY_TEMPLATE;

        node_svg_elements[i].appendChild(foreign_obj);

        ordered_nodes[i].data.svg_element = node_svg_elements[i];
    }

    for (let i = 0; i < ordered_edges.length; ++i)
        ordered_edges[i].data.svg_element = edge_svg_elements[i];

    //ordered_nodes[0].data.svg_element.addEventListener('click', function(e){console.debug(e);});
}

function populateCraftableObjects() {
    globals.craftableItemSelectTom.clear(true);
    globals.craftableItemSelectTom.clearOptions();
    globals.craftableItemSelectTom.addOptions(game_data.craftable_objects.map((obj_name) => ({value: obj_name, text: game_data.objects[obj_name].Name})));
}

function initCraftableObjectsSelect() {
    globals.craftableItemSelectTom = new TomSelect(
        globals.htmlElements.craftableItemSelect,
        {
            searchField: "text",
            maxOptions: null,
            placeholder: "Select an item...",
            onChange: generateGraph
        }
    );

    populateCraftableObjects();
}

function initGraph() {
    mermaid.registerLayoutLoaders(elkLayouts);
    
    document.addEventListener(
        "DOMContentLoaded",
        function(){
            mermaid.initialize({
                //darkMode: true,
                //theme: "dark"
                deterministicIds: true,
                startOnLoad: false,
                deterministicIDSeed: undefined,
                //  htmlLabels
                logLevel: "warn",
                securityLevel: "loose",
                flowchart: {
                    defaultRenderer: "elk"
                }
            });
        }
    );
}

function init() {
    const HTML_ELEMENT_NAMES = ['craftableItemSelect', 'useAletnateRecipes', 'logisticsTierSelect', 'graphContainer'];
    for (const name of HTML_ELEMENT_NAMES) {
        globals.htmlElements[name] = document.getElementById(name);
    }

    initCraftableObjectsSelect();

    initGraph();

    // Transform information to fraction objects
    for (const game_obj of Object.values(game_data.objects)) {
        if (!game_obj.hasOwnProperty('recipes'))
            continue;

        for (const recipe of game_obj.recipes) {
            recipe.duration = fraction(recipe.duration.n, recipe.duration.d);
            for (const ingredient of recipe.ingredients) {
                ingredient.amount = fraction(ingredient.amount.n, ingredient.amount.d);
            }
        }
    }
}

init();

// TODO: remove
globals.craftableItemSelectTom.setValue("BP_EquipmentDescriptorStunSpear_C");