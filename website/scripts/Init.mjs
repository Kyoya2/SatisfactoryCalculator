import {g_} from "@/Common.mjs";
import {assert, formatFrac, deepFreeze} from "@/Utils.mjs";
import Config from "@/Config.mjs";
import game_data from "@/GameData.auto.mjs";
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "@/GameData.auto.mjs" */

import TomSelect from "tom-select";
import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';
import mermaid from "mermaid";
import elkLayouts from '@mermaid-js/layout-elk';
import Panzoom from "@panzoom/panzoom";

// Must be imported last!!!
import {generateGraphPhase1, generateGraphPhase2, updateSelectedProduct, resetAlternateRecipes, updateDisplayMultiplier, updateDisplayMultiplierAuto, toggleShowByproducts} from "@/Main.mjs"


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

    // Make "game_data" immutable
    deepFreeze(game_data);
}

function initCraftableObjectsSelect() {
    function renderOptionTemplate(class_name) {
        function renderOption(data, escape) {
            return `<div class="${class_name}">
                        <span class="label">${escape(data.text)}</span>
                        <img class="icon" src="${escape(`images/game_icons/${data.value}.png`)}" />
                    </div>`;
        }

        return renderOption;
    }

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

                updateSelectedProduct(product_name, true);

                // For some reason, the text box stays focused after selecting an option,
                // which looks ugly, since it's extended vertically as long as it's selected.
                // Deselect it!
                this.blur();
            },

            render: {
                option: renderOptionTemplate("product-select-option"),
                item: renderOptionTemplate("product-select-option product-select-item")
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

function initByproductsCheckbox() {
    /** @type {HTMLInputElement} */
    const checkbox = document.getElementById("showByproductsCheckbox");

    checkbox.checked = g_.config.show_byproducts;
    checkbox.onclick = toggleShowByproducts;
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

function initPanZoom() {
    g_.panzoom = Panzoom(
        g_.html_elements.graphContainer,
        {
            excludeClass: "panzoom-clickable",

            // Without this, only the initially-visible part of the graph can be used
            // to pan the view
            canvas: true
        }
    );

    g_.html_elements.panzoomGraphContainer.addEventListener('wheel', g_.panzoom.zoomWithWheel);
}

export default function initApp() {
    // This was a bug that I presumably fixed
    assert(null === g_.config, "Module already initialized");
    
    // Must be first!
    g_.config = new Config();

    initGameData();

    const HTML_ELEMENT_NAMES = ['displayMultiplierInput', 'graphContainer', 'panzoomGraphContainer', 'nodeOverlayTemplate', 'edgeOverlayTemplate'];
    for (const name of HTML_ELEMENT_NAMES) {
        g_.html_elements[name] = document.getElementById(name);
    }

    const craftable_objects_select = initCraftableObjectsSelect();

    initDefaultTrivialResources();

    document.getElementById("resetAlternateRecipesButton").onclick = resetAlternateRecipes;

    initDisplayMultiplier();

    initByproductsCheckbox();

    initGraph();

    initPanZoom();

    // Generate the graph
    craftable_objects_select.setValue(g_.config.product_name, true);
    updateSelectedProduct(g_.config.product_name, false);
}
