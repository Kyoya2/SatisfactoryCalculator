import Config from "@/Config.mjs";
import {assert} from "@/Utils.mjs";
/** @import { GameObjectId, CountedItem, Recipe, Building, CraftingObject } from "@/GameData/GameData.mjs" */
/** @import { Graph, Node, Edge } from "@/Graph.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';
/** @import { PanzoomObject } from "@panzoom/panzoom" */

/**
 * @typedef {Object} MyEdgeInfo
 * @property {boolean} is_byproduct - Whether the target node of this link is a byproduct of the source node's recipe.
 * @property {Fraction} amount - The number of units of the source node that are required to produce 1 unit of the target node
 * @property {Fraction} production_required - 
 * @property {Fraction} total_fraction - The part of units of the source node that should be supplied to the target node
 * @property {SVGPathElement} path_element - The SVG element that represent the path between the source and target node
 * @property {HTMLDivElement} html - The overlay tof the edge's label container
 */

/** @typedef {Map<Building, Set<SCNode>>} BuildingsInfo */
/**
 * @typedef {Object} SCGlobals
 * @property {Object.<string, HTMLElement>} html_elements - Frequently accessed HTML elements mapped by their IDs
 * @property {Node<SCNode, MyEdgeInfo>} product_node - The node object of the current graph's product
 * @property {BuildingsInfo} buildings_info - Maps between a building and all crafting objects
 *  in the current graph that use it.
 * @property {Config} config - Settings that are saved in the URL
 * @property {PanzoomObject} panzoom - Graph Panzoom object
 */

/** @type {SCGlobals} */
export var g_ = {
    html_elements: Object.create(null),
    product_node: null,
    buildings_info: null,
    config: null,
    panzoom: null
};

// For debugging
globalThis.satisfactoryCalculator = g_;


export class SCNode {
    /**
     * @param {CraftingObject} obj 
     * @param {boolean} is_pure_byproduct 
     */
    constructor(obj, is_pure_byproduct) {
        /** 
         * @type {CraftingObject} 
         * @private
         */
        this._obj = obj;

        /**
         * @type {boolean}
         * @private
         */
        this._is_pure_byproduct = is_pure_byproduct;

        /**
         * The total required production per second of this unit's resource to fully supply its target node's
         * recipe for optimally producing the final product. Disregarding byproducts.
         * @type {Fraction} 
         * @public
        */
        this.total_production_required = fraction(0);

        /**
         * Same as above, but including byproducts. Meaning that this value can be smaller than "total_production_required"
         * if the current item is being produced as a byproduct of another recipe in the current tree.
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

    /** @returns {boolean} */
    isTrivial() { return g_.config.trivial_resources.has(this._obj.id); }

    /** @returns {boolean} */
    isPureByproduct() { return this._is_pure_byproduct; }

    /** @returns {Recipe[]} */
    recipes() { return this._obj.recipes; }

    /** @returns {Recipe} */
    selectedRecipe() {
        let selected_recipe = g_.config.alternate_recipes.get(this._obj.id);
        if (undefined === selected_recipe)
            selected_recipe = this._obj.recipes[0];

        return selected_recipe;
    }

    /** @returns {Fraction} */
    singleMachineProduction() {
        assert(!this.isTrivial() && !this.isPureByproduct());
        const selected_recipe = this.selectedRecipe();
        assert(undefined != selected_recipe);
        return mathjs.divide(selected_recipe.products.get(this._obj.id), selected_recipe.duration);
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
