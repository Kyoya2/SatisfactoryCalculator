import Config from "@/Config.mjs";
import {assert} from "@/Utils.mjs";
import game_data from "@/GameData.auto.mjs";
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "@/GameData.auto.mjs" */
/** @import { Graph, Node, Edge } from "@/Graph.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';

/**
 * @typedef {Object} MyNodeInfo
 * @property {CraftingObject} obj - The associated crafting object
 * @property {boolean} is_byproduct - Whether this node is a pure byproduct in the current recipe tree - i.e., it's not used as an ingredient
 *  for any other node in the current recipe tree.
 * @property {number} selected_recipe_index - The index of the recipe in `obj.recipes` that's currently used
 * @property {Fraction} total_production_required - The total required production per second of this unit's resource to fully supply its target nodes
 *  recipe that are required for optimally producing the final product. Including byproducts!
 * @property {Fraction} production_required - Same as above, but excluding byproducts.
 * @property {HTMLDivElement} html - The HTML overlay of the node
 * 
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
 *      product_node: Node<MyNodeInfo, MyEdgeInfo>,
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

/**
 * Returns the selected recipe of the given node
 * @param {MyNodeInfo} node 
 * @returns {Recipe}
 */
export function selectedRecipe(node) {
    assert(undefined !== node);
    return game_data.recipes[node.obj.recipes[node.selected_recipe_index]];
}

/**
 * @param {MyNodeInfo} node 
 * @returns {Fraction}
 */
export function singleMachineProduction(node) {
    assert(!g_.config.trivial_resources.has(node.obj.id));
    const selected_recipe = selectedRecipe(node);
    return mathjs.divide(selected_recipe.products[node.obj.id], selected_recipe.duration);
}

/**
 * @param {MyNodeInfo} node 
 * @returns {Fraction}
 */
export function machinesRequired(node) {
    return mathjs.divide(node.production_required, singleMachineProduction(node));
}

/**
 * @param {MyNodeInfo} node
 * @returns {Fraction}
 */
export function getNodeProductionPerMinute(node) {
    return mathjs.multiply(node.production_required, 60);
}
