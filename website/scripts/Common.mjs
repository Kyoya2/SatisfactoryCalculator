import Config from "@/Config.mjs";
import {assert} from "@/Utils.mjs";
import game_data from "@/GameData.auto.mjs";
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "@/GameData.auto.mjs" */
/** @import { Graph, Node, Edge } from "@/Graph.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';

/**
 * @typedef {Object} MyEdgeInfo
 * @property {boolean} is_byproduct - Whether the target node of this link is a byproduct of the source node's recipe.
 * @property {Fraction} amount - The number of units of the source node that are required to produce 1 unit of the target node
 * @property {Fraction} production_required - 
 * @property {Fraction} total_fraction - The part of units of the source node that should be supplied to the target node
 * @property {SVGPathElement} path_element - The SVG element that represent the path between the source and target node
 * @property {HTMLDivElement} html - The overlay tof the edge's label container
 */

/**
 * @type {{
 *      html_elements: Object.<string, HTMLElement>,
 *      product_node: Node<SCNode, MyEdgeInfo>,
 *      config: Config,
 *      panzoom: *
 * }}
 */
export var g_ = {
    html_elements: Object.create(null),
    product_node: null,
    config: null,
    panzoom: null
};

// For debugging
globalThis.satisfactoryCalculator = g_;


export class SCNode {
    /**
     * @param {GameObjectId} obj_id 
     * @param {boolean} is_pure_byproduct 
     * @param {number=} selected_recipe_index
     */
    constructor(obj_id, is_pure_byproduct, selected_recipe_index) {
        /** 
         * @type {CraftingObject} 
         * @private
         */
        this._obj = game_data.crafting_objects[obj_id];

        /**
         * @type {boolean}
         * @private
         */
        this._is_pure_byproduct = is_pure_byproduct;

        /**
         * @type {number=} 
         * @public
        */
        this.selected_recipe_index = selected_recipe_index;

        /**
         * The total required production per second of this unit's resource to fully supply its target nodes
         * recipe that are required for optimally producing the final product. Including byproducts!
         * @type {Fraction} 
         * @public
        */
        this.total_production_required = fraction(0);

        /**
         * Same as above, but excluding byproducts.
         * @type {Fraction} 
         * @public
        */
        this.production_required = fraction(0);
        
        /**
         * The HTML overlay of the node.
         * @type {HTMLDivElement} 
         * @public
        */
        this.html = null;
    }

    /** @returns {CraftingObject} */
    obj() { return this._obj; }

    isTrivial() { return g_.config.trivial_resources.has(this._obj.id); }

    isPureByproduct() { return this._is_pure_byproduct; }

    /** @returns {string[]} */
    recipes() { return this._obj.recipes; }

    /** @returns {Recipe=} */
    selectedRecipe() {
        if (undefined === this.selected_recipe_index)
            return undefined;

        return game_data.recipes[this._obj.recipes[this.selected_recipe_index]];
    }

    /** @returns {Fraction} */
    singleMachineProduction() {
        assert(!this.isTrivial() && !this.isPureByproduct());
        const selected_recipe = this.selectedRecipe();
        return mathjs.divide(selected_recipe.products[this._obj.id], selected_recipe.duration);
    }

    /** @returns {Fraction} */
    machinesRequired() {
        return mathjs.divide(this.production_required, this.singleMachineProduction());
    }

    /** @returns {Fraction} */
    productionPerMinute() {
        return mathjs.multiply(this.production_required, 60);
    }
}
