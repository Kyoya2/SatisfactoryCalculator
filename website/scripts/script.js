// @ts-check

// Docs:
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/
// https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html
// https://mathjs.org/docs/datatypes/fractions.html


import game_data from "./game_data.auto.mjs"
import {assert, any, reduce} from "./utils.mjs"
import {Graph, Node, Edge} from "./Graph.mjs"
import Config from "./Config.mjs"

/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "./game_data.auto.mjs" */

import mermaid from "mermaid";
import elkLayouts from '@mermaid-js/layout-elk';
import {fraction, add, subtract, multiply, divide, smaller, format, number, Fraction} from 'mathjs';

/**
 * @typedef {{
 *      obj: CraftingObject,
 *      selected_recipe_index: number,
 *      factored_recipe_duration: Fraction,
 *      total_required_amount: Fraction,
 *      total_machines_required: Fraction,
 *      html: HTMLDivElement | null
 * }} MyNodeInfo
 * 
 *  @typedef {{
 *      amount: Fraction,
 *      total_amount: Fraction,
 *      total_fraction: Fraction,
 *      svg_element: *
 * }} MyEdgeInfo
 */

/**
 * @type {{
 *      html_elements: Object.<string, HTMLElement>,
 *      product_node: Node<MyNodeInfo, MyEdgeInfo> | null,
 *      config: Config
 * }}
 */
var g_ = {
    html_elements: Object.create(null),
    product_node: null,
    config: new Config()
};

globalThis.satisfactoryCalculator = g_;

const ALTERNATE_RECIPE_NAME_PREFIX = "Alternate: ";


/**
 * @param {Fraction} a 
 * @param {Fraction} b 
 * @returns {Fraction}
 */
function fractionMax(a, b) {
    if (smaller(a, b))
        return b;
    return a;
}

/**
 * 
 * @param {Fraction} frac 
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
        result += `${data.obj.id}["${data.obj.name}<br/>Duration=${(data.factored_recipe_duration)}<br/>Total required=${(data.total_required_amount)}<br/>Machines required=${(data.total_machines_required)}"]\n`;
    }

    result += '\n';

    for (const edge of ordered_edges) {
        result += `${edge.source.data.obj.id}--${(edge.data.amount)}<br/>${(edge.data.total_amount)}<br/>${formatFrac(edge.data.total_fraction)}-->${edge.target.data.obj.id}\n`;
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
    const clone = g_.html_elements.nodeOverlayTemplate.content.cloneNode(true);
    assert(1 == clone.childElementCount);
    const node_overlay = clone.firstChild;

    const obj = node.data.obj;

    // Initialize the overlay
    node_overlay.querySelector('.node-item-name').textContent = obj.name;

    // Initialize alternate recipes select, or remove if there are none
    if (obj.recipes.length <= 1) {
        node_overlay.querySelector(".node-alternate-recipes").remove();
    } else {
        let recipe_index = g_.config.alternate_recipes.get(obj.id);
        if (undefined === recipe_index)
            recipe_index = 0;

        /** @type {HTMLSelectElement} */
        const alternate_recipes_select = node_overlay.querySelector(".node-alternate-recipes > select");
        for (let i = 0; i < obj.recipes.length; ++i) {
            /** @type {string} */
            let recipe_name = obj.recipes[i].name;

            // Remove the "Alternate: " suffix from recipe names
            if (recipe_name.startsWith(ALTERNATE_RECIPE_NAME_PREFIX)) {
                recipe_name = recipe_name.substring(ALTERNATE_RECIPE_NAME_PREFIX.length);
            }

            alternate_recipes_select.add(new Option(recipe_name));
        }

        alternate_recipes_select.selectedIndex = node.data.selected_recipe_index;
        
        alternate_recipes_select.oninput = function(e) {
            console.log(obj.id, e.target.selectedIndex);
            g_.config.alternate_recipes.set(obj.id, e.target.selectedIndex);
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
    // Don't do anything if selection is cleared
    if ("" == g_.config.product_name)
        return;

    /** @type {Fraction} */
    const conveyor_speed = game_data.transporters.conveyor_belts[g_.config.conveyor_speed_index].speed;

    /** @type {Fraction} */
    const pipeline_speed = game_data.transporters.pipelines[g_.config.conveyor_speed_index].speed;

    /** @type {Graph<MyNodeInfo, MyEdgeInfo>} */
    let graph = new Graph();

    /** @type {Map<GameObjectId, Node<MyNodeInfo, MyEdgeInfo>>} */
    let nodes = new Map();

    /**
     * @param {GameObjectId} object_id
     * @returns {Node<MyNodeInfo, MyEdgeInfo>}
     */
    function _generateSchematic(object_id) {
        let node = nodes.get(object_id);
        if (undefined !== node)
            return node;

        /** @type {CraftingObject} */
        const obj = game_data.crafting_objects[object_id];

        // Temp solution
        if (undefined === obj.recipes) {
            obj.recipes = [{
                name: '_dummy',
                ingredients: [],
                duration: fraction(1),
                is_alternate: false,
            }]
        }
        
        let selected_recipe_index = g_.config.alternate_recipes.get(object_id);
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

        // TODO: use "conveyor_speed" or "pipeline_speed" according to the material type!
        const factored_recipe_duration = fractionMax(selected_recipe.duration, multiply(max_amount_ingredient, conveyor_speed));

        node = graph.createNode({
            obj: obj,
            selected_recipe_index: selected_recipe_index,
            factored_recipe_duration: factored_recipe_duration,
            total_required_amount: 0,
            total_machines_required: 0,
            html: null
        })

        nodes.set(object_id, node)

        const trivial_prod = g_.config.trivial_resources.get(object_id);

        // TODO
        if (undefined !== trivial_prod)
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

    const product_node = _generateSchematic(g_.config.product_name);
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
    g_.product_node = generateSchematic();
    if (!g_.product_node)
        return;

    // TODO: this function relies on the assumption that the SVG elements appear in the order that
    //       they were declared in the Mermaid string. Check this!
    const [graph_mermaid, ordered_nodes, ordered_edges] = to_mermaid(g_.product_node.graph);
    const render_result = await mermaid.render('graphSvg', graph_mermaid);

    g_.html_elements.graphContainer.innerHTML = render_result.svg;

    /** @type {SVGElement} */
    const graph_svg = g_.html_elements.graphContainer.querySelector('#graphSvg');

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
        g_.config.alternate_recipes.entries(),
        ([obj_id, selected_recipe_index]) => game_data.crafting_objects[obj_id].recipes[selected_recipe_index].is_alternate
    );

    g_.config.alternate_recipes.clear();
    g_.config.notifyChange();

    if (should_re_render_graph)
        generateGraph();
}

/** @param {InputEvent} e */
function numberInputFilter(e) { e.target.value = e.target.value.replace(/[^0-9/.]+/g, ''); }

function initGameData() {
    // Transform information to fraction objects
    for (const game_obj of Object.values(game_data.crafting_objects)) {
        for (const recipe of game_obj.recipes) {
            recipe.duration = fraction(recipe.duration);
            for (const ingredient of recipe.ingredients) {
                ingredient.amount = fraction(ingredient.amount);
            }
        }
    }

    for (const transporters of Object.values(game_data.transporters)) {
        for (const transporter of transporters) {
            transporter.speed = fraction(transporter.speed);
        }
    }
}

function initCraftableObjectsSelect() {
    g_.craftableItemSelectTom = new TomSelect(
        g_.html_elements.craftableItemSelect,
        {
            options: game_data.crafting_products.map((obj_id) => ({value: obj_id, text: game_data.crafting_objects[obj_id].name})),
            searchField: "text",
            maxOptions: null,
            placeholder: "Select an item...",

            /** @param {string} product_name */
            onChange: function(product_name) {
                g_.config.product_name = product_name;
                g_.config.notifyChange();
                generateGraph();
            }
        }
    );
}

function initTrivialResources() {
    /** @type {HTMLTableSectionElement} */
    const tbody = document.querySelector("#trivialResourcesTable > tbody");

    /** @type {Map<string, HTMLTableRowElement>} */
    const rows = new Map();

    /** @type {Map<GameObjectId, HTMLInputElement>} */
    const textboxes = new Map();

    for (const ingredient_id of game_data.crafting_ingredients) {
        /** @type {CraftingObject} */
        const obj = game_data.crafting_objects[ingredient_id];
        const row = tbody.insertRow();

        row.insertCell().innerHTML = `<label>${obj.name}</label>`;
        
        const text_box = document.createElement("input");
        text_box.setAttribute("type", "text");
        text_box.setAttribute("size", "7");
        text_box.setAttribute("placeholder", "Prod/m");
        text_box.classList.add("trivialResourceProdInput");
        text_box.oninput = numberInputFilter;

        let prod = g_.config.trivial_resources.get(ingredient_id);
        if (undefined !== prod) {
            text_box.setAttribute("value", format(multiply(prod, 60), { fraction: 'ratio' })); // Prod/s -> Prod/m
        }

        row.insertCell().appendChild(text_box);
        rows.set(obj.name.toLowerCase(), row);
        textboxes.set(ingredient_id, text_box);
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
        g_.config.trivial_resources.clear();
        for (const [crafting_obj_name, text_box] of textboxes.entries()) {
            if ("" == text_box.value)
                continue;

            g_.config.trivial_resources.set(
                crafting_obj_name,
                divide(fraction(text_box.value), 60)
            )
        }

        g_.config.notifyChange();
    }
}

function initMoversSelects() {
    const MOVERS = [
        ["unlockedConveyorBeltSelect",  "conveyor_belts",   "Conveyor Belt ",   "conveyor_speed_index"],
        ["unlockedPipelineSelect",      "pipelines",        "Pipeline ",        "pipeline_speed_index"],
    ]
    
    for (const [select_id, data_name, name_prefix, config_field] of MOVERS) {
        /** @type {HTMLSelectElement} */
        const select_element = document.getElementById(select_id);

        for (const transporter of game_data.transporters[data_name]) {
            /** @type {string} */
            let name = transporter.name;

            // Remove prefix
            assert(transporter.name.startsWith(name_prefix));
            name = name.substring(name_prefix.length);

            select_element.add(new Option(name));
        }

        select_element.selectedIndex = g_.config[config_field];
        select_element.oninput = function(e) {
            g_.config[config_field] = parseInt(e.target.selectedIndex);
            g_.config.notifyChange();
            generateGraph();
        }
    }
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
    initGameData();

    const HTML_ELEMENT_NAMES = ['craftableItemSelect', 'graphContainer', 'nodeOverlayTemplate'];
    for (const name of HTML_ELEMENT_NAMES) {
        g_.html_elements[name] = document.getElementById(name);
    }

    initCraftableObjectsSelect();

    initTrivialResources();

    document.getElementById("resetAlternateRecipesButton").onclick = resetAlternateRecipes;

    initMoversSelects();

    initGraph();

    g_.craftableItemSelectTom.setValue(g_.config.product_name);
}

init();

// TODO: remove
//g_.craftableItemSelectTom.setValue("BP_EquipmentDescriptorStunSpear_C");