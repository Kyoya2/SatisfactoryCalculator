// @ts-check
// Docs:
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/
// https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html


import game_data from "./game_data.auto.mjs"
import {assert, any, reduce} from "./utils.mjs"
import {Graph, Node, Edge} from "./Graph.mjs"

/** @import { GameObjectName, CountedItem, Recipe, GameObject } from "./game_data.auto.mjs" */

// TODO: change "cytoscape.umd.js" to "cytoscape.min.js" on prod
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.esm.min.mjs';
import elkLayouts from "https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@latest/dist/mermaid-layout-elk.esm.min.mjs"
import {fraction, add, subtract, multiply, divide, smaller, format} from 'https://cdn.jsdelivr.net/npm/mathjs/+esm'

/**
 * @typedef {{
 *      obj: GameObject,
 *      selected_recipe_index: number,
 *      factored_recipe_duration: fraction,
 *      total_required_amount: fraction,
 *      total_machines_required: fraction,
 *      html: HTMLDivElement | null
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
 *      html_elements: Object.<string, HTMLElement>,
 *      product_node: Node<MyNodeInfo, MyEdgeInfo> | null,
 *      config: {
 *          alternate_recipes: Map<GameObjectName, number>,
 *          trivial_resources: Map<GameObjectName, fraction>
 *      }
 * }}
 */
var globals = {
    html_elements: Object.create(null),
    product_node: null,
    config: {
        alternate_recipes: new Map(),
        trivial_resources: new Map()
    }
};

globalThis.satisfactoryCalculator = globals;

const ALTERNATE_RECIPE_NAME_PREFIX = "Alternate: ";


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
        result += `${data.obj.ClassName}["${data.obj.Name}<br/>Duration=${(data.factored_recipe_duration)}<br/>Total required=${(data.total_required_amount)}<br/>Machines required=${(data.total_machines_required)}"]\n`;
    }

    result += '\n';

    for (const edge of ordered_edges) {
        result += `${edge.source.data.obj.ClassName}--${(edge.data.amount)}<br/>${(edge.data.total_amount)}<br/>${formatFrac(edge.data.total_fraction)}-->${edge.target.data.obj.ClassName}\n`;
    }

    return [result, ordered_nodes, ordered_edges];
}

/**
 * 
 * @param {SVGGElement} node_svg_element 
 * @param {Node<MyNodeInfo, MyEdgeInfo>} node 
 * @returns {HTMLDivElement}
 */
function createNodeOverlay(node_svg_element, node) {
    // Clone the template
    const clone = globals.html_elements.nodeOverlayTemplate.content.cloneNode(true);
    assert(1 == clone.childElementCount);
    const node_overlay = clone.firstChild;

    const obj = node.data.obj;

    // Initialize the overlay
    node_overlay.querySelector('.node-item-name').textContent = obj.Name;

    // Initialize alternate recipes select, or remove if there are none
    if (obj.recipes.length <= 1) {
        node_overlay.querySelector(".node-alternate-recipes").remove();
    } else {
        let recipe_index = globals.config.alternate_recipes.get(obj.ClassName);
        if (undefined === recipe_index)
            recipe_index = 0;

        /** @type {HTMLSelectElement} */
        const alternate_recipes_select = node_overlay.querySelector(".node-alternate-recipes > select");
        for (let i = 0; i < obj.recipes.length; ++i) {
            /** @type {string} */
            let recipe_name = game_data.objects[obj.recipes[i].recipe_name].Name;

            // Remove the "Alternate: " suffix from recipe names
            if (recipe_name.startsWith(ALTERNATE_RECIPE_NAME_PREFIX)) {
                recipe_name = recipe_name.substring(ALTERNATE_RECIPE_NAME_PREFIX.length);
            }

            alternate_recipes_select.add(new Option(recipe_name));
        }

        alternate_recipes_select.selectedIndex = node.data.selected_recipe_index;
        
        alternate_recipes_select.oninput = function(e) {
            console.log(obj.ClassName, e.target.selectedIndex);
            globals.config.alternate_recipes.set(obj.ClassName, e.target.selectedIndex);
            generateGraph();
        };
    }

    // Inject a "foreignObject" element into the node
    const foreign_obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreign_obj.appendChild(node_overlay);
    
    // Position the "foregnObject" over the node
    const rect = node_svg_element.getBBox({fill: true, stroke: true, markers: true, clipped: false});
    foreign_obj.setAttribute("x", rect.x-2);
    foreign_obj.setAttribute("y", rect.y-2);
    foreign_obj.setAttribute("width", rect.width+4);
    foreign_obj.setAttribute("height", rect.height+4);

    node_svg_element.appendChild(foreign_obj);

    return node_overlay;
}

/**
 * Generates schematics for according to the current configuration.
 * Returns the root node (product).
 * @returns {Node<MyNodeInfo, MyEdgeInfo>=}
 */
function generateSchematic() {
    // Load state from HTML
    // TODO: store these in a global to avoid loading each time
    const product_name = globals.html_elements.craftableItemSelect.value;
    const conveyor_speed = fraction(60, parseInt(globals.html_elements.logisticsTierSelect.value));
    //const trivial_objects = ["Desc_IronIngot_C", "Desc_CopperIngot_C", "Desc_SteelIngot_C"]; // TODO: make configurable
    const trivial_objects = ["Desc_OreIron_C", "Desc_OreCopper_C", "Desc_Coal_C"]; // TODO: make configurable

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

        let selected_recipe_index = globals.config.alternate_recipes.get(object_name);
        if (undefined === selected_recipe_index) {
            // "game_data" is generated such that non-alternate recipes are always before
            // alternate recipes.
            assert(obj.recipes.findIndex(recipe => !recipe.is_alternate) <= 0);
            selected_recipe_index = 0;
        }

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
            html: null
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

async function generateGraph() {
    globals.product_node = generateSchematic();
    if (!globals.product_node)
        return;

    // TODO: this function relies on the assumption that the SVG elements appear in the order that
    //       they were declared in the Mermaid string. Check this!
    const [graph_mermaid, ordered_nodes, ordered_edges] = to_mermaid(globals.product_node.graph);
    const render_result = await mermaid.render('graphSvg', graph_mermaid);

    globals.html_elements.graphContainer.innerHTML = render_result.svg;

    /** @type {SVGElement} */
    const graph_svg = globals.html_elements.graphContainer.querySelector('#graphSvg');

    const node_svg_elements = graph_svg.querySelectorAll('.nodes > g.node.default');
    const edge_svg_elements = graph_svg.querySelectorAll('.edges.edgePaths > path');

    assert(node_svg_elements.length == ordered_nodes.length);
    assert(edge_svg_elements.length == ordered_edges.length);

    for (let i = 0; i < ordered_nodes.length; ++i)
    {
        const current_node = ordered_nodes[i];
        current_node.data.html = createNodeOverlay(node_svg_elements[i], current_node)
    }

    for (let i = 0; i < ordered_edges.length; ++i)
        ordered_edges[i].data.svg_element = edge_svg_elements[i];
}

function resetAlternateRecipes() {
    // Re-render only if a non-alternate recipe is currently selected
    const should_re_render_graph = any(
        globals.config.alternate_recipes.entries(),
        ([obj_name, selected_recipe_index]) => game_data.objects[obj_name].recipes[selected_recipe_index].is_alternate
    );

    globals.config.alternate_recipes.clear();

    if (should_re_render_graph)
        generateGraph();
}

function initCraftableObjectsSelect() {
    globals.craftableItemSelectTom = new TomSelect(
        globals.html_elements.craftableItemSelect,
        {
            searchField: "text",
            maxOptions: null,
            placeholder: "Select an item...",
            onChange: generateGraph
        }
    );

    globals.craftableItemSelectTom.addOptions(game_data.craftable_objects.map((obj_name) => ({value: obj_name, text: game_data.objects[obj_name].Name})));
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

/** @param {InputEvent} e */
function numberInputFilter(e) { e.target.value = e.target.value.replace(/[^0-9]+/g, ''); }

function initTrivialResources() {
    /** @type {HTMLTableSectionElement} */
    const tbody = document.querySelector("#trivialResourcesTable > tbody");

    /** @type {Map<string, HTMLTableRowElement>} */
    const rows = new Map();

    /** @type {Map<GameObjectName, HTMLInputElement>} */
    const textboxes = new Map();

    for (const crafting_obj_name of game_data.crafting_objects) {
        /** @type {GameObject} */
        const obj = game_data.objects[crafting_obj_name];
        const row = tbody.insertRow();

        row.insertCell().innerHTML = `<label>${obj.Name}</label>`;
        
        const text_box = document.createElement("input");
        text_box.setAttribute("type", "text");
        text_box.setAttribute("size", "7");
        text_box.setAttribute("placeholder", "Prod/m");
        text_box.classList.add("trivialResourceProdInput");
        text_box.oninput = numberInputFilter;

        row.insertCell().appendChild(text_box);

        rows.set(obj.Name.toLowerCase(), row);
        textboxes.set(crafting_obj_name, text_box);
    }

    /** @type {HTMLInputElement} */
    const search = document.getElementById("trivialResourceSearch");

    /** @param {InputEvent} e */
    search.oninput = function(e) {
        const text = e.target.value;
        for (const [obj_name, row] of rows.entries()) {
            row.style.display = obj_name.includes(text) ? "" : "none";
        }
    };

    /** @type {HTMLButtonElement} */
    const update_button = document.getElementById("updateTrivialResourcesButton");
    update_button.onclick = function() {
        globals.config.trivial_resources.clear();
        for (const [crafting_obj_name, text_box] of textboxes.entries()) {
            if ("" == text_box.value)
                continue;

            globals.config.trivial_resources.set(
                crafting_obj_name,
                fraction(parseInt(text_box.value), 60)
            )
        }

        console.debug(globals.config.trivial_resources);
    }
}

function init() {
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

    const HTML_ELEMENT_NAMES = ['craftableItemSelect', 'useAletnateRecipes', 'logisticsTierSelect', 'graphContainer', 'nodeOverlayTemplate'];
    for (const name of HTML_ELEMENT_NAMES) {
        globals.html_elements[name] = document.getElementById(name);
    }

    initCraftableObjectsSelect();

    initTrivialResources();

    document.getElementById("resetAlternateRecipesButton").onclick = resetAlternateRecipes;

    initGraph();

}

init();

// TODO: remove
globals.craftableItemSelectTom.setValue("BP_EquipmentDescriptorStunSpear_C");