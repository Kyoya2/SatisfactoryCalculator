import {g_} from "@/Common.mjs";
import {assert, formatFrac, deepFreeze} from "@/Utils.mjs";
import Config from "@/Config.mjs";
import game_data from "@/GameData/GameData.mjs";

/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "@/GameData/GameData.mjs" */

import TomSelect from "tom-select";
import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';
import mermaid from "mermaid";
import elkLayouts from '@mermaid-js/layout-elk';
import Panzoom from "@panzoom/panzoom";

// Must be imported last!!!
import {updateSelectedProduct, resetAlternateRecipes, resetTrivialResources, updateDisplayMultiplier, updateDisplayMultiplierAuto, toggleShowByproducts} from "@/Main.mjs"


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
            options: game_data.crafting_products.map((product_obj) => ({value: product_obj.id, text: product_obj.name})),
            searchField: ["text"],
            maxOptions: null,
            placeholder: "Select an item...",

            /** @param {number} product_id */
            onChange: function(product_id) {
                // Don't do anything if selection is cleared
                if (null == product_id)
                    return;

                updateSelectedProduct(product_id, true);

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

function initDisplayMultiplier() {
    g_.html_elements.displayMultiplierInput.value = formatFrac(g_.config.display_multiplier, true, true);

    /** @type {HTMLInputElement} */
    const update_button = document.getElementById("updateDisplayMultiplier");
    update_button.onclick = (e) => { updateDisplayMultiplier(); };

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

function initResetButtons() {
    document.getElementById("resetAlternateRecipesButton").onclick = resetAlternateRecipes;
    document.getElementById("resetTrivialResources").onclick = resetTrivialResources;
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

    // If no trivial resources are selected, reset them
    if (0 == g_.config.trivial_resources.size)
        resetTrivialResources();

    const HTML_ELEMENT_NAMES = ['displayMultiplierInput', 'graphContainer', 'panzoomGraphContainer', 'nodeOverlayTemplate', 'edgeOverlayTemplate'];
    for (const name of HTML_ELEMENT_NAMES) {
        g_.html_elements[name] = document.getElementById(name);
    }

    const craftable_objects_select = initCraftableObjectsSelect();

    initDisplayMultiplier();

    initByproductsCheckbox();

    initResetButtons();

    initGraph();

    initPanZoom();

    // Generate the graph
    craftable_objects_select.setValue(g_.config.selected_product.id, true);
    updateSelectedProduct(g_.config.selected_product.id, false);
}
