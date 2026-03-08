// @ts-check

import {g_, machinesRequired} from "./Common.mjs"
import { assert, formatFrac } from "./Utils.mjs";
import game_data from "./GameData.auto.mjs"
import {generateGraphPhase1, generateGraphPhase2, resetAlternateRecipes, updateDisplayMultiplier, updateDisplayMultiplierAuto} from "./Main.mjs"
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "./GameData.auto.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';
import mermaid from "mermaid";
import elkLayouts from '@mermaid-js/layout-elk';


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
    g_.craftableItemSelectTom = new TomSelect( // TODO: install as an NPM module!!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        text_box.oninput = function(e) { e.target.value = e.target.value.replace(/[^0-9/.]+/g, ''); };

        let prod = g_.config.trivial_resources.get(ingredient_id);
        if (undefined !== prod) {
            text_box.value = mathjs.format(mathjs.multiply(prod, 60), { fraction: 'ratio' }); // Prod/s -> Prod/m
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
                mathjs.divide(fraction(text_box.value), 60) // Prod/m -> Prod/s
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

export default function initApp() {
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
