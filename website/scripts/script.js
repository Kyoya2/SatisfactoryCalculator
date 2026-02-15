// @ts-check
// Docs:
// https://js.cytoscape.org/
// https://github.com/cytoscape/cytoscape.js-dagre
// https://devhints.io/jsdoc
// https://tom-select.js.org/docs/

import game_data from "./game_data.auto.js"

// TODO: change "cytoscape.umd.js" to "cytoscape.min.js" on prod
import cytoscape from "https://unpkg.com/cytoscape/dist/cytoscape.esm.mjs"
import dagre from "https://cdn.skypack.dev/cytoscape-dagre"

/**
 * Game data types:
 * @typedef {string} GameObjectName
 * @typedef {{item_name: GameObjectName, amount: number}} CountedItem
 * @typedef {{
 *      product_name: GameObjectName,
 *      ingredients: CountedItem[],
 *      duration: number,
 *      is_alternate: boolean,
 *      recipe_name: GameObjectName
 * }} Recipe
 * @typedef {{ClassName: GameObjectName, Name: string, recipes: Recipe[]}} GameObject
 * 
 * Program types:
 * @typedef {{
 *      obj: GameObject,
 *      selected_recipe_index: number,
 *      factored_recipe_duration: number,
 *      total_required_amount: number,
 *      total_machines_required: number
 * }} MyNodeInfo
 * 
 *  @typedef {{
 *      amount: number
 * }} MyEdgeInfo
 * 
 * @typedef {{
 *      data: {
 *          id: string,
 *          display_name: string,
 *          icon_url: string
 *      },
 *      scratch: {
 *          _satisfactoryCalculator: MyNodeInfo
 *      }
 * }} CyNode
 * @typedef {{data: {id: string, source: string, target: string}, scratch: {_satisfactoryCalculator: MyEdgeInfo}}} CyEdge
 * @typedef {(CyNode|CyEdge)} CyElement
 */

/** @type {{objects: Object.<GameObjectName, GameObject>, craftable_objects: GameObjectName[], crafting_objects: GameObjectName[]}} */
game_data;


var globals = Object.create(null);
globals.htmlElements = Object.create(null);
globalThis.satisfactoryCalculator = globals;

/*
// Hover behavior
graph.on('mouseover', 'node', evt => {
    evt.target.style('background-color', '#22c55e');
    console.debug("Over");
});

graph.on('mouseout', 'node', evt => {
    evt.target.style('background-color', '#4f46e5');
    console.debug("Out");
});*/

/**
 * 
 * @param {boolean} condition
 * @param {string} message
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function generateGraph() {
    // Load state from HTML
    const product_name = globals.htmlElements.craftableItemSelect.value;
    const conveyor_speed = 60 / Number(globals.htmlElements.logisticsTierSelect.value);
    const trivial_objects = ["Desc_IronIngot_C", "Desc_CopperIngot_C"]; // TODO: make configurable

    // Don't do anything if selection is cleared
    if ("" == product_name)
        return;

    console.debug(product_name, conveyor_speed, trivial_objects);

    /** @type {Set<GameObjectName>} */
    let processed_nodes = new Set();
    
    /** @type {CyNode[]} */
    let nodes = [];

    /** @type {CyEdge[]} */
    let edges = [];

    /**
     * 
     * @param {GameObjectName} object_name
     */
    function _generateGraph(object_name) {
        if (processed_nodes.has(object_name))
            return;

        processed_nodes.add(object_name);

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
        const max_amount_ingredient = selected_recipe.ingredients.reduce((max, current) => Math.max(max, current.amount), 0);
        const factored_recipe_duration = Math.max(selected_recipe.duration, max_amount_ingredient * conveyor_speed);

        nodes.push({
            data: {
                id: object_name,
                display_name: obj.Name,
                icon_url: obj.iconPath
            },
            scratch: {
                _satisfactoryCalculator: {
                    obj: obj,
                    selected_recipe_index: selected_recipe_index,
                    factored_recipe_duration: factored_recipe_duration,
                    total_required_amount: 0,
                    total_machines_required: 0
                }
            }
        });

        if (trivial_objects.includes(object_name))
            return;

        for (const ingredient of selected_recipe.ingredients) {
            _generateGraph(ingredient.item_name);
            edges.push({
                data: {
                    id: "e" + ingredient.item_name + "->" + object_name,
                    source: ingredient.item_name,
                    target: object_name
                },
                scratch: {
                    _satisfactoryCalculator: {
                        amount: ingredient.amount
                    }
                }
            });
        }
    }

    _generateGraph(product_name);

    globals.graph.json({elements: {nodes: nodes, edges: edges}});
    globals.graph.layout({
        name: 'dagre',
        nodeDimensionsIncludeLabels: true,
        edgeSep: 100,
        randDir: 'TB'
    }).run();
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
    cytoscape.use(dagre);
    globals.graph = cytoscape({
        container: globals.htmlElements.graph,

        userZoomingEnabled: false, 
        userPanningEnabled: false,
        autoungrabify: true,
        autounselectify: false,

        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#ddd',
                    'shape': 'rectangle',
                    'background-image': "data(icon_url)",
                    'background-fit': 'cover',

                    'label': 'data(display_name)',
                    'text-valign': "bottom",
                    'text-halign': "center"
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                }
            }
        ]
    });
}

function init() {
    const HTML_ELEMENT_NAMES = ['craftableItemSelect', 'useAletnateRecipes', 'logisticsTierSelect', 'graph'];
    for (const name of HTML_ELEMENT_NAMES) {
        globals.htmlElements[name] = document.getElementById(name);
    }

    initCraftableObjectsSelect();

    initGraph();
}

init();

// TODO: remove
globals.craftableItemSelectTom.setValue("Desc_SpaceElevatorPart_1_C");