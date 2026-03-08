// @ts-check

import Config from "./Config.mjs"
import {assert} from "./Utils.mjs"
/** @import { GameObjectId, CountedItem, Recipe, CraftingObject } from "./GameData.auto.mjs" */
/** @import { Graph, Node, Edge } from "./Graph.mjs" */

import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';

/**
 * @typedef {Object} MyNodeInfo
 * @property {CraftingObject} obj - The associated crafting object
 * @property {number} selected_recipe_index - The index of the recipe in `obj.recipes` that's currently used
 * @property {Fraction} total_production_required - The total required production per second of this unit's resource to fully supply its target nodes
 *  recipe that are required for optimally producing the final product
 * @property {Fraction?} trivial_prod - If it's a trivial resource, contains its production per second
 * @property {HTMLDivElement} html - The HTML overlay of the node
 * 
 * @typedef {Object} MyEdgeInfo
 * @property {Fraction} amount - The number of units of the source node that are required to produce 1 unit of the target node
 * @property {Fraction} production_required - 
 * @property {Fraction} total_fraction - The part of units of the source node that should be supplied to the target node
 * @property {number} minimal_transporter_index - The index of the minimal transporter that's required for optiomally supplying the source node's
 *  output into the target node's input
 * @property {SVGPathElement} path_element - The SVG element that represent the path between the source and target node
 * @property {HTMLDivElement} html - The overlay tof the edge's label container
 */

/**
 * @type {{
 *      html_elements: Object.<string, HTMLElement>,
 *      product_node: Node<MyNodeInfo, MyEdgeInfo>,
 *      config: Config
 * }}
 */
export var g_ = {
    html_elements: Object.create(null),
    product_node: null,
    config: new Config()
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
    return node.obj.recipes[node.selected_recipe_index];
}

/**
 * @param {MyNodeInfo} node 
 * @returns {Fraction}
 */
export function singleMachineProduction(node) {
    assert(null === node.trivial_prod);
    return mathjs.divide(1, selectedRecipe(node).duration);
}

/**
 * @param {MyNodeInfo} node 
 * @returns {Fraction}
 */
export function machinesRequired(node) {
    return mathjs.divide(node.total_production_required, singleMachineProduction(node));
}

/**
 * @param {MyNodeInfo} node
 * @returns {Fraction}
 */
export function getNodeProductionPerMinute(node) {
    return mathjs.multiply(node.total_production_required, 60);
}
