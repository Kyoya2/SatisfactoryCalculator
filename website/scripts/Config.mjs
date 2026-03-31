import {fraction, multiply, format, Fraction} from 'mathjs';

/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "@/GameData.auto.mjs" */


export default class Config {
    static #_DEFAULT_PRODUCT = "Desc_Cable_C";
    static #_DEFAULT_CONVEYOR_INDEX = "0";
    static #_DEFAULT_PIPELINE_INDEX = "0";
    static #_DEFAULT_DISPLAY_MULTIPLIER = "1";
    static #_DEFAULT_SHOW_BYPRODUCTS = "1";
    static #_DEFAULT_ALTERNATE_RECIPES = "";
    static #_DEFAULT_TRIVIAL_RESOURCES = "";

    constructor() {
        const search_params = new URLSearchParams(window.location.search);

        /** @type {GameObjectId} */
        this.product_name = search_params.get("productName") ?? Config.#_DEFAULT_PRODUCT;

        /** @type {number} */
        this.conveyor_speed_index = parseInt(search_params.get("conveyorSpeed") ?? Config.#_DEFAULT_CONVEYOR_INDEX)
        
        /** @type {number} */
        this.pipeline_speed_index = parseInt(search_params.get("pipelineSpeed") ?? Config.#_DEFAULT_PIPELINE_INDEX);

        /** @type {Fraction} */
        this.display_multiplier = fraction(search_params.get("displayMultiplier") ?? Config.#_DEFAULT_DISPLAY_MULTIPLIER);

        /** @type {boolean} */
        this.show_byproducts = !!parseInt(search_params.get("showByproducts") ?? Config.#_DEFAULT_SHOW_BYPRODUCTS);

        /** @type {Map<GameObjectId, number>} */
        this.alternate_recipes = new Map();
        const alternate_recipes = search_params.get("alternateRecipes") ?? Config.#_DEFAULT_ALTERNATE_RECIPES;
        if (alternate_recipes) {
            for (const item of alternate_recipes.split(",")) {
                const [k, v] = item.split("=");
                this.alternate_recipes.set(k, parseInt(v));
            }
        }

        /** @type {Set<GameObjectId>} */
        this.trivial_resources = new Set();
        const trivial_resources = search_params.get("trivialResources") ?? Config.#_DEFAULT_TRIVIAL_RESOURCES;
        if (trivial_resources) {
            for (const resource_id of trivial_resources.split(",")) {
                this.trivial_resources.add(resource_id);
            }
        }

        this.notifyChange();
    }

    notifyChange() {
        const search_params = new URLSearchParams({
            productName: this.product_name,
            conveyorSpeed: this.conveyor_speed_index.toString(),
            pipelineSpeed: this.pipeline_speed_index.toString(),
            displayMultiplier: format(this.display_multiplier, { fraction: 'decimal' }),
            showByproducts: this.show_byproducts ? "1" : "0",
            alternateRecipes: [...this.alternate_recipes.entries()].map((kv) => kv.join('=')).join(','),
            trivialResources: [...this.trivial_resources.entries()].join(','),
        });

        window.history.replaceState(
            null,
            '',
            `${window.location.origin}${window.location.pathname}?${search_params.toString()}`
        );
    }
}