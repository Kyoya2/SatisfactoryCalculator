// @ts-check

// Docs:
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/
// https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html
// https://mathjs.org/docs/datatypes/fractions.html


import game_data from "./game_data.auto.mjs"
import {assert, any, reduce, map} from "./utils.mjs"
import {Graph, Node, Edge} from "./Graph.mjs"
import Config from "./Config.mjs"

/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "./game_data.auto.mjs" */

import mermaid from "mermaid";
import elkLayouts from '@mermaid-js/layout-elk';
import {fraction, add, subtract, multiply, divide, smaller, format, number, Fraction, lcm} from 'mathjs';

/**
 * @typedef {{
 *      obj: CraftingObject,
 *      selected_recipe_index: number,
 *      production_duration: Fraction,
 *      total_required_amount: Fraction,
 *      total_machines_required: Fraction,
 *      trivial_prod: Fraction?,
 *      html: HTMLDivElement
 * }} MyNodeInfo
 * 
 *  @typedef {{
 *      amount: Fraction,
 *      total_amount: Fraction,
 *      total_fraction: Fraction,
 *      path_element: SVGPathElement,
 *      html: HTMLDivElement
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
 * @param {boolean} as_ratio?
 * @returns {string}
 */
function formatFrac(frac, as_ratio=true) {
    return format(frac, { fraction: as_ratio ? 'ratio' : 'decimal' });
}

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
        result += `${data.obj.id}["${data.obj.name}<br/>Duration=${(data.production_duration)}<br/>Total required=${(data.total_required_amount)}<br/>Machines required=${(data.total_machines_required)}"]\n`;
    }

    result += '\n';

    for (const edge of ordered_edges) {
        //result += `${edge.source.data.obj.id}--${(edge.data.amount)}<br/>${(edge.data.total_amount)}<br/>${formatFrac(edge.data.total_fraction)}-->${edge.target.data.obj.id}\n`;
        //result += `${edge.source.data.obj.id}--${formatFrac(edge.data.total_fraction)}-->${edge.target.data.obj.id}\n`;
        result += `${edge.source.data.obj.id}--AAAAAAAAAAAAAAAAAA</br>AAAAAAAAAAAAAAAAAA-->${edge.target.data.obj.id}\n`;
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

    if (undefined !== node.data.trivial_prod) {
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
    if ((undefined !== node.data.trivial_prod) || (obj.recipes.length <= 1)) {
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
            console.log(obj.id, e.target.selectedIndex);
            g_.config.alternate_recipes.set(obj.id, e.target.selectedIndex);
            generateGraph();
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
    const pipeline_speed = game_data.transporters.pipelines[g_.config.pipeline_speed_index].speed;

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
        if (0 == obj.recipes.length) {
            assert(false);
            obj.recipes = [{
                name: '_dummy',
                ingredients: [],
                duration: fraction(1),
                is_alternate: false,
                produced_in: []
            }]
        }

        const trivial_prod = g_.config.trivial_resources.get(object_id);
        let selected_recipe_index = -1;
        let production_duration;
        let selected_recipe;
        if (undefined === trivial_prod) {
            selected_recipe_index = g_.config.alternate_recipes.get(object_id);
            if (undefined === selected_recipe_index) {
                // "game_data" is generated such that non-alternate recipes are always before
                // alternate recipes.
                assert(obj.recipes.findIndex(recipe => !recipe.is_alternate) <= 0);
                selected_recipe_index = 0;
            }

            selected_recipe = obj.recipes[selected_recipe_index];

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

            production_duration = fractionMax(selected_recipe.duration, slowest_loaded_ingredient.load_time);
        }
        else {
            // Note: this value doesn't matter
            production_duration = fraction(1);
        }

        node = graph.createNode({
            obj: obj,
            selected_recipe_index: selected_recipe_index,
            production_duration: production_duration,
            total_required_amount: 0,
            total_machines_required: 0,
            trivial_prod: trivial_prod,
            html: null
        })

        nodes.set(object_id, node)

        if (undefined === trivial_prod) {
            for (const ingredient of selected_recipe.ingredients) {
                const ingredient_node = _generateSchematic(ingredient.item_name);
                node.add_blink(
                    ingredient_node,
                    {
                        amount: ingredient.amount,
                        total_amount: 0,
                        total_fraction: 0,
                        path_element: null,
                        html: null
                    }
                );
            }
        }

        return node;
    }

    const product_node = _generateSchematic(g_.config.product_name);
    product_node.data.total_required_amount = fraction(1);

    const cycle_duration = product_node.data.production_duration;

    // Breadth-first search starting from the product
    for (const node of product_node.graph.smartBreadthFirst(false)) {
        for (const [target_node, data] of node.flinks()) {
            data.total_amount = multiply(target_node.data.total_required_amount, data.amount);
            node.data.total_required_amount = add(node.data.total_required_amount, data.total_amount);
        }

        for (const [target_node, data] of node.flinks()) {
            data.total_fraction = divide(data.total_amount, node.data.total_required_amount);
        }

        // Number of products that a single machine produces in a single cycle
        const single_machine_production = divide(cycle_duration, node.data.production_duration);

        node.data.total_machines_required = divide(node.data.total_required_amount, single_machine_production);
    }

    return product_node;
}

function applyDisplayMultiplier(frac) {
    return multiply(frac, g_.config.display_multiplier);
}

/**
 * 
 * @param {MyNodeInfo} node
 * @returns {Fraction}
 */
function getNodeProductionPerMinute(node) {
    const single_machine_prod_per_sec = divide(1, node.production_duration);
    const all_machines_prod_per_sec = multiply(single_machine_prod_per_sec, node.total_machines_required);
    return multiply(all_machines_prod_per_sec, 60);
}

function updateOverlay() {
    const graph = g_.product_node.graph;
    for (const node of graph.nodes()) {
        node.data.html.querySelector('.production-rate-label').textContent = `${formatFrac(applyDisplayMultiplier(getNodeProductionPerMinute(node.data)), false)}/m`;
    
        if (undefined === node.data.trivial_prod) {
            node.data.html.querySelector('.machines-required-label').textContent = formatFrac(applyDisplayMultiplier(node.data.total_machines_required), false);
        }
    }

    for (const edge of graph.links()) {
        edge.data.html.querySelector('.edge-ratio-label').textContent = formatFrac(edge.data.total_fraction);

        const parent_prod_per_min = getNodeProductionPerMinute(edge.source.data);
        const input_prod = multiply(parent_prod_per_min, edge.data.total_fraction);
        edge.data.html.querySelector('.edge-production-label').textContent = `${formatFrac(applyDisplayMultiplier(input_prod), false)}/m`;
    }
}

async function generateGraph() {
    const product_node = generateSchematic();
    if (null == product_node)
        return;

    g_.product_node = product_node;

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

    for (let i = 0; i < ordered_nodes.length; ++i) {
        createNodeOverlay(node_svg_elements[i], ordered_nodes[i])
    }

    for (let i = 0; i < ordered_edges.length; ++i) {
        const current_edge = ordered_edges[i];
        current_edge.data.path_element = edge_path_svg_elements[i];
        createEdgeOverlay(edge_label_svg_elements[i], current_edge);
    }

    updateDisplayMultiplierAuto();
    // Called by "updateDisplayMultiplierAuto"
    //updateOverlay();
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

function updateDisplayMultiplier() {
    g_.config.display_multiplier = fraction(g_.html_elements.displayMultiplierInput.value);
    g_.config.notifyChange();
    updateOverlay();
}

function updateDisplayMultiplierAuto() {
    // Calculate the LCM of the denominators of all machines required.
    // This will yield a multiplier that, when applied, makes the "machines required" of all nodes
    // into a whole number.
    const computed_lcm = lcm(...map(
        g_.product_node?.graph.nodes(),
        (node) => node.data.total_machines_required.d
    ))

    g_.html_elements.displayMultiplierInput.value = computed_lcm.toString();
    updateDisplayMultiplier();
}

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

    // If no trivial resources are selected, generate them:
    if (0 == g_.config.trivial_resources.size) {
        for (const ingredient_id of game_data.crafting_ingredients) {
            /** @type {CraftingObject} */
            const ingredient = game_data.crafting_objects[ingredient_id];

            // If the ingredient has no recipes, or only has alternate recipes, then it should
            // be trivial by default.
            // Note: The 2nd check relies on the fact that the recipes are generated such that
            //       non-alternate recipes always come first.
            if (0 == ingredient.recipes.length || ingredient.recipes[0].is_alternate) {
                g_.config.trivial_resources.set(ingredient_id, fraction(1));
            }
        }

        // Water is a byproduct of a bunch of things, so it won't be detected by the algorithm above
        g_.config.trivial_resources.set("Desc_Water_C", fraction(1));

        g_.config.notifyChange();
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
        
        /** @type {HTMLInputElement} */
        const text_box = document.createElement("input");
        text_box.type = "text";
        text_box.size = 7;
        text_box.placeholder = "Prod/m";
        text_box.classList.add("trivialResourceProdInput");
        text_box.oninput = numberInputFilter;

        let prod = g_.config.trivial_resources.get(ingredient_id);
        if (undefined !== prod) {
            text_box.value = format(multiply(prod, 60), { fraction: 'ratio' }); // Prod/s -> Prod/m
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
        generateGraph();
    }
}

function initDisplayMultiplier() {
    g_.html_elements.displayMultiplierInput.value = formatFrac(g_.config.display_multiplier, false);

    /** @type {HTMLInputElement} */
    const update_button = document.getElementById("updateDisplayMultiplier");
    update_button.onclick = updateDisplayMultiplier

    /** @type {HTMLInputElement} */
    const auto_button = document.getElementById("updateDisplayMultiplierAuto");
    auto_button.onclick = updateDisplayMultiplierAuto;
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

    const HTML_ELEMENT_NAMES = ['craftableItemSelect', 'displayMultiplierInput', 'graphContainer', 'nodeOverlayTemplate', 'edgeOverlayTemplate'];
    for (const name of HTML_ELEMENT_NAMES) {
        g_.html_elements[name] = document.getElementById(name);
    }

    initCraftableObjectsSelect();

    initTrivialResources();

    document.getElementById("resetAlternateRecipesButton").onclick = resetAlternateRecipes;

    initMoversSelects();

    initDisplayMultiplier();

    initGraph();

    // This will trigger the generation of the graph
    g_.craftableItemSelectTom.setValue(g_.config.product_name);
}

init();

// TODO: remove
//g_.craftableItemSelectTom.setValue("BP_EquipmentDescriptorStunSpear_C");