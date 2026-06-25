import * as GameDataStructs from '@/GameData/GameDataStructs.auto.js';
import game_data from "@/GameData/GameData.mjs";
import {map} from "@/Utils.mjs"
import {g_} from './Common.mjs';
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject, Vehicle } from "@/GameData/GameData.mjs" */

import * as mathjs from 'mathjs';
import {fraction} from 'mathjs';


export default class Config {
    static #QUERY_STRING_NAME = "d";

    constructor() {
        this.selected_product = game_data.crafting_products[20];
        this.display_multiplier = fraction(1);
        this.show_byproducts = true;

        /** @type {Map<GameObjectId, Recipe>} */
        this.alternate_recipes = new Map();

        /** @type {Set<GameObjectId>} */
        this.trivial_resources = new Set(game_data.trivial_ingredients.map(obj => obj.id));

        /**
         * If null, the throughput unit is one item. Otherwise, the throughput unit is the
         * number of stacks that can fit inside the selected vehicle.
         * @type {?Vehicle}
         */
        this.throughput_unit = null;

        /** @type {number} */
        this.max_decimals = -1;

        const search_params = new URLSearchParams(window.location.search);
        
        /** @type {*} */
        let website_state = search_params.get(Config.#QUERY_STRING_NAME);
        if (null !== website_state) {
            try
            {
                website_state = Uint8Array.fromBase64(website_state, {alphabet: "base64url"});
                website_state = GameDataStructs.WebsiteState.decode(website_state);

                this.selected_product = game_data.crafting_objects[website_state.product_id];
                this.display_multiplier = fraction(website_state.display_multiplier.n, website_state.display_multiplier.d);
                this.show_byproducts = website_state.show_byproducts;
                this.alternate_recipes = new Map(
                    Object.entries(website_state.alternate_recipes).map((
                        [obj_id, recipe_id]) => [Number(obj_id), game_data.recipes[Number(recipe_id)]]
                    )
                );
                this.trivial_resources = new Set(website_state.trivial_resources);

                if (null != website_state.throughput_unit)
                    this.throughput_unit = game_data.vehicles[website_state.throughput_unit];
            } catch { debugger; }
        }

        this.notifyChange();
    }

    notifyChange() {
        /** @type {Set<GameObjectId>} */
        let current_graph_items = new Set(
            (null == g_.product_node) ?
            game_data.crafting_objects.map(obj => obj.id) :                 // No product node, don't filter any item
            map(g_.product_node.graph.nodes(), node => node.data.obj().id)  // Filter items according to the current graph
        );

        const data = {
            product_id: this.selected_product.id,
            display_multiplier: new GameDataStructs.Fraction({n: mathjs.number(this.display_multiplier.n), d: mathjs.number(this.display_multiplier.d)}),
            show_byproducts: this.show_byproducts,

            // Serialize only alternate recipes for nodes in the current graph.
            alternate_recipes: Object.fromEntries(
                this.alternate_recipes.entries()
                .filter(([obj_id, recipe]) => current_graph_items.has(obj_id))
                .map(([obj_id, recipe]) => [obj_id, recipe.id])
            ),
            trivial_resources: [...this.trivial_resources.keys()],
            throughput_unit: (null == this.throughput_unit) ? null : this.throughput_unit.id
        };
        
        let website_state = GameDataStructs.WebsiteState.encode(data).finish().toBase64({alphabet: "base64url", omitPadding: true});

        let obj = Object.create(null);
        obj[Config.#QUERY_STRING_NAME] = website_state;

        const search_params = new URLSearchParams(obj);

        const new_url = `${window.location.origin}${window.location.pathname}?${search_params.toString()}`;

        window.history.replaceState(null, '', new_url);
    }
}