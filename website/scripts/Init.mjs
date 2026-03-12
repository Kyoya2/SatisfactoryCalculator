import {g_, machinesRequired} from "@/Common.mjs"
import {assert, formatFrac, deepFreeze} from "@/Utils.mjs";
import Config from "@/Config.mjs"
import game_data from "@/GameData.auto.mjs"
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "@/GameData.auto.mjs" */

import TomSelect from "tom-select"
import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';
import mermaid from "mermaid";
import elkLayouts from '@mermaid-js/layout-elk';

// Must be imported last!!!
import {generateGraphPhase1, generateGraphPhase2, resetAlternateRecipes, updateDisplayMultiplier, updateDisplayMultiplierAuto} from "@/Main.mjs"


function initGameData() {
    // Transform information to fraction objects
    for (const recipe of Object.values(game_data.recipes)) {
        // Recipe durations
        recipe.duration = fraction(recipe.duration);

        // Product and ingredient amounts
        for (const counted_items of [recipe.products, recipe.ingredients]) {
            for (const item_id of Object.keys(counted_items)) {
                counted_items[item_id] = fraction(counted_items[item_id]);
            }
        }
    }

    // Transporter speeds
    for (const transporters of Object.values(game_data.transporters)) {
        for (const transporter of transporters) {
            transporter.speed = fraction(transporter.speed);
        }
    }

    // Make "game_data" immutable
    deepFreeze(game_data);
}

function initCraftableObjectsSelect() {
    return new TomSelect(
        "#craftableItemSelect",
        {
            options: game_data.crafting_products.map((obj_id) => ({value: obj_id, text: game_data.crafting_objects[obj_id].name})),
            searchField: ["text"],
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

function initDefaultTrivialResources() {
    // If no trivial resources are selected, generate them
    if (0 != g_.config.trivial_resources.size)
        return;

    for (const ingredient_id of game_data.crafting_ingredients) {
        /** @type {CraftingObject} */
        const ingredient = game_data.crafting_objects[ingredient_id];

        // If the ingredient has no recipes, or only has alternate recipes, then it should
        // be trivial by default.
        // Note: The 2nd check relies on the fact that the recipes are generated such that
        //       non-alternate recipes always come first.
        if (0 == ingredient.recipes.length || game_data.recipes[ingredient.recipes[0]].is_alternate) {
            g_.config.trivial_resources.add(ingredient_id);
        }
    }

    // Water is a byproduct of a bunch of things, so it won't be detected by the algorithm above
    g_.config.trivial_resources.add("Desc_Water_C");

    g_.config.notifyChange();
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
                deterministicIds: true,
                startOnLoad: false,
                securityLevel: "loose",
                flowchart: {
                    defaultRenderer: "elk"
                }
            });
        }
    );
}

export default function initApp() {
    // This was a bug that I presumably fixed
    assert(null === g_.config, "Module already initialized");
    
    // Must be first!
    g_.config = new Config();

    initGameData();

    const HTML_ELEMENT_NAMES = ['displayMultiplierInput', 'graphContainer', 'nodeOverlayTemplate', 'edgeOverlayTemplate'];
    for (const name of HTML_ELEMENT_NAMES) {
        g_.html_elements[name] = document.getElementById(name);
    }

    const craftable_objects_select = initCraftableObjectsSelect();

    initDefaultTrivialResources();

    document.getElementById("resetAlternateRecipesButton").onclick = resetAlternateRecipes;

    initMoversSelects();

    initDisplayMultiplier();

    initGraph();

    // This will trigger the generation of the graph
    craftable_objects_select.setValue(g_.config.product_name);
}
