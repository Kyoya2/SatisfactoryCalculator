// @ts-check

import {fraction, multiply, format, Fraction} from 'mathjs';

/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "./game_data.auto.mjs" */


export default class Config {
    static #_DEFAULT_PRODUCT = "BP_EquipmentDescriptorStunSpear_C";
    static #_DEFAULT_CONVEYOR_INDEX = "0";
    static #_DEFAULT_PIPELINE_INDEX = "0";
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

        /** @type {Map<GameObjectId, number>} */
        this.alternate_recipes = new Map();
        const alternate_recipes = search_params.get("alternateRecipes") ?? Config.#_DEFAULT_ALTERNATE_RECIPES;
        if (alternate_recipes) {
            for (const item of alternate_recipes.split(",")) {
                const [k, v] = item.split("=");
                this.alternate_recipes.set(k, parseInt(v));
            }
        }

        /** @type {Map<GameObjectId, Fraction>} */
        this.trivial_resources = new Map();
        const trivial_resources = search_params.get("trivialResources") ?? Config.#_DEFAULT_TRIVIAL_RESOURCES;
        if (trivial_resources) {
            for (const item of trivial_resources.split(",")) {
                const [k, v] = item.split("=");
                this.trivial_resources.set(k, fraction(v));
            }
        }

        this.notifyChange();
    }

    // TODO: add getters and setters to everything to make this automatic
    notifyChange() {
        const search_params = new URLSearchParams({
            productName: this.product_name,
            conveyorSpeed: this.conveyor_speed_index.toString(),
            pipelineSpeed: this.pipeline_speed_index.toString(),
            alternateRecipes: [...this.alternate_recipes.entries()].map((kv) => kv.join('=')).join(','),
            trivialResources: [...this.trivial_resources.entries()].map(([k,v]) => `${k}=${format(v, { fraction: 'ratio' })}`).join(','),
        });

        window.history.replaceState(
            null,
            '',
            `${window.location.origin}${window.location.pathname}?${search_params.toString()}`
        );
    }
}