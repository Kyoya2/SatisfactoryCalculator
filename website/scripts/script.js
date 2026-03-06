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
 * @typedef {Object} MyNodeInfo
 * @property {CraftingObject} obj - The associated crafting object
 * @property {number} selected_recipe_index - The index of the recipe in `obj.recipes` that's currently used
 * @property {Fraction} total_production_required - The total required production per second of this unit's resource to fully supply its target nodes
 *  recipe that are required for optimally producing the final product
 * @property {Fraction?} trivial_prod - If it's a trivial resource, contains its production per second
 * @property {HTMLDivElement} html - The HTML overlay of the node
 * 
 * @typedef {Object} MyEdgeInfo
 * @property {Fraction} amount - The number of units of the source node that are required to produce 1 unit of the target node
 * @property {Fraction} production_required - 
 * @property {Fraction} total_fraction - The part of units of the source node that should be supplied to the target node
 * @property {number} minimal_transporter_index - The index of the minimal transporter that's required for optiomally supplying the source node's
 *  output into the target node's input
 * @property {SVGPathElement} path_element - The SVG element that represent the path between the source and target node
 * @property {HTMLDivElement} html - The overlay tof the edge's label container
 */

/**
 * @type {{
 *      html_elements: Object.<string, HTMLElement>,
 *      product_node: Node<MyNodeInfo, MyEdgeInfo>,
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
 * Returns the selected recipe of the given node
 * @param {MyNodeInfo} node 
 * @returns {Recipe}
 */
function selectedRecipe(node) {
    assert(undefined !== node);
    return node.obj.recipes[node.selected_recipe_index];
}

/**
 * Regenerates the entire graph. Should only be called if the structure of the graph was changed.
 */
async function generateGraphPhase1() {
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
                        production_required: 0,
                        total_fraction: 0,
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
function generateGraphPhase2() {
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
            node.data.total_production_required = add(node.data.total_production_required, data.production_required);
        }

        for (const [target_node, data] of node.flinks()) {
            assert(0 != node.data.total_production_required.n);
            data.total_fraction = divide(data.production_required, node.data.total_production_required);
        }

        if (null === node.data.trivial_prod) {
            // Calculate the required production rate of each input
            for (const [source_node, data] of node.blinks()) {
                data.production_required = multiply(node.data.total_production_required, data.amount);
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
 * 
 * @param {Fraction} frac 
 * @returns {Fraction}
 */
function applyDisplayMultiplier(frac) {
    return multiply(frac, g_.config.display_multiplier);
}

/**
 * 
 * @param {MyNodeInfo} node
 * @returns {Fraction}
 */
function getNodeProductionPerMinute(node) {
    return multiply(node.total_production_required, 60);
}

/**
 * @param {MyNodeInfo} node 
 * @returns {Fraction}
 */
function singleMachineProduction(node) {
    assert(null === node.trivial_prod);
    return divide(1, selectedRecipe(node).duration);
}

/**
 * @param {MyNodeInfo} node 
 * @returns {Fraction}
 */
function machinesRequired(node) {
    return divide(node.total_production_required, singleMachineProduction(node));
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
        edge.data.html.querySelector('.edge-production-label').textContent = `${formatFrac(applyDisplayMultiplier(multiply(edge.data.production_required, 60)), false)}/m`;
    }
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
        generateGraphPhase1();
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
        g_.product_node.graph.nodes(),
        (node) => (null === node.data.trivial_prod) ? machinesRequired(node.data).d : 1
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
                // Don't do anything if selection is cleared
                if ("" == product_name)
                    return;

                g_.config.product_name = product_name;
                g_.config.notifyChange();
                generateGraphPhase1();
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
                divide(fraction(text_box.value), 60) // Prod/m -> Prod/s
            )
        }

        g_.config.notifyChange();
        generateGraphPhase1();
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
            generateGraphPhase2();
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