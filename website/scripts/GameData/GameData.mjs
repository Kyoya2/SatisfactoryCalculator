import * as GameDataStructs from './GameDataStructs.auto.js';

import {fraction, Fraction} from 'mathjs';
import * as fzstd from 'fzstd';

/**
 * @typedef {number} GameObjectId
 * 
 * @typedef {Map<GameObjectId, Fraction>} CountedItems
 * 
 * @typedef {Omit<GameDataStructs.Building, "power_consumption" | "speed_power_exponent" | "production_power_exponent"> & {
 *      id: GameObjectId,
 *      power_consumption: Fraction,
 *      speed_power_exponent: Fraction,
 *      production_power_exponent: Fraction,
 * }} Building
 * 
 * @typedef {Omit<GameDataStructs.Recipe, "ingredients" | "products" | "duration" | "produced_in"> & {
 *      id: GameObjectId,
 *      ingredients: CountedItems,
 *      products: CountedItems,
 *      duration: Fraction,
 *      produced_in: Building
 * }} Recipe
 *
 * @typedef {Omit<GameDataStructs.CraftingObject, "recipes" | "stack_size"> & {
 *      id: GameObjectId,
 *      recipes: Recipe[],
 *      stack_size: Fraction
 * }} CraftingObject
 * 
 * @typedef {Omit<GameDataStructs.Vehicle, "item_stack_capacity" | "fluid_capacity"> & {
 *      id: GameObjectId,
 *      item_stack_capacity: Fraction,
 *      fluid_capacity: Fraction,
 * }} Vehicle
 * 
 * @typedef {{
 *      crafting_objects: CraftingObject[],
 *      recipes: Recipe[],
 *      buildings: Building[],
 *      vehicles: Vehicle[],
 *      crafting_products: CraftingObject[],
 *      crafting_ingredients: CraftingObject[],
 *      trivial_ingredients: CraftingObject[],
 *  }} GameData
 */


// Maps between stack size enum value to actual size
// Depends on the order of the members in "GameDataStructs.StackSize"
const STACK_SIZES = [
    fraction(0),    // SS_FLUID
    fraction(50),   // SS_SMALL
    fraction(100),  // SS_MEDIUM
    fraction(200),  // SS_BIG
    fraction(500),  // SS_HUGE
];


/**
 * @param {GameDataStructs.Fraction} frac
 * @returns {Fraction}
*/
function _convertFrac(frac) {
    return fraction(frac.n, frac.d);
}

/**
 * @returns {Promise<GameData>}
 */
async function initGameData() {
    /** @type {*} */
    let serialized_data = await fetch(`${import.meta.env.BASE_URL}game_data.bin`);
    serialized_data = new Uint8Array(await serialized_data.arrayBuffer());
    serialized_data = fzstd.decompress(serialized_data);

    /** @type {*} */
    let deserialized_data = GameDataStructs.GameData.decode(serialized_data);

    for (const [i, crafting_obj] of deserialized_data.crafting_objects.entries()) {
        crafting_obj.id = i;
        
        // Convert recipe ID reference to point to the actual recipe obj
        crafting_obj.recipes = crafting_obj.recipes.map((recipe_id) => deserialized_data.recipes[recipe_id]);

        // Convert stack size to numerical value
        crafting_obj.stack_size = STACK_SIZES[crafting_obj.stack_size];
    }

    for (const [i, recipe_obj] of deserialized_data.recipes.entries()) {
        recipe_obj.id = i;

        // Convert ingredient and product amounts to Maps of mathjs fractions
        for (const obj_map_name of ["ingredients", "products"]) {
            recipe_obj[obj_map_name] = new Map(
                Object.entries(recipe_obj[obj_map_name]).map(
                    ([obj_id, amount]) => [Number(obj_id), _convertFrac(amount)]
                )
            );
        }

        // Convert to mathjs fraction
        recipe_obj.duration = _convertFrac(recipe_obj.duration);

        // Convert building ID reference to point to the actual building obj
        recipe_obj.produced_in = deserialized_data.buildings[recipe_obj.produced_in];
    }

    for (const [i, building_obj] of deserialized_data.buildings.entries()) {
        building_obj.id = i;

        // Convert to mathjs fraction
        building_obj.power_consumption = _convertFrac(building_obj.power_consumption);
        building_obj.speed_power_exponent = _convertFrac(building_obj.speed_power_exponent);
        building_obj.production_power_exponent = _convertFrac(building_obj.production_power_exponent);
    }

    for (const [i, vehicle_obj] of deserialized_data.vehicles.entries()) {
        vehicle_obj.id = i;

        // Convert to mathjs fraction
        vehicle_obj.item_stack_capacity = fraction(vehicle_obj.item_stack_capacity);
        vehicle_obj.fluid_capacity = fraction(vehicle_obj.fluid_capacity);
    }

    // Convert lists of IDs to lists of referenced objects
    for (const crafting_obj_array_name of ["crafting_ingredients", "crafting_products", "trivial_ingredients"]) {
        deserialized_data[crafting_obj_array_name] = deserialized_data[crafting_obj_array_name].map(
            (obj_id) => deserialized_data.crafting_objects[obj_id]
        );
    }

    return deserialized_data;
}

/** @type {GameData} */
var game_data = await initGameData();
export default game_data;
