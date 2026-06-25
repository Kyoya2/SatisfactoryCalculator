import * as mathjs from 'mathjs';
import {fraction, Fraction} from 'mathjs';

import {g_} from "@/Common.mjs";


/**
 * @param {boolean} condition
 * @param {string=} message
 */
export function assert(condition, message) {
    if (!condition) {
        debugger;
        message = message || "Assertion failed";
        alert(message)
        throw new Error(message);
    }
}

/**
 * @template T 
 * @param {Iterable<T>} iterable 
 * @param {(item: T) => boolean} predicate 
 * @returns {boolean}
 */
export function any(iterable, predicate) {
    for (const item of iterable) {
        if (predicate(item))
            return true;
    }

    return false;
}

/**
 * @template T 
 * @param {Iterable<T>} iterable 
 * @param {(item: T) => boolean} predicate 
 * @returns {boolean}
 */
export function all(iterable, predicate) {
    for (const item of iterable) {
        if (!predicate(item))
            return false;
    }

    return true;
}

/**
 * @template T 
 * @param {Iterable<T>} iterable 
 * @param {(item: T) => boolean} predicate 
 * @returns {IterableIterator<T>}
 */
export function *filter(iterable, predicate) {
    for (const item of iterable) {
        if (predicate(item))
            yield item;
    }
}

/**
 * @template T, U
 * @param {Iterable<T>} iterable 
 * @param {(accumulator: U , item: T) => U} callback 
 * @param {U} initial_value 
 * @returns {U}
 */
export function reduce(iterable, callback, initial_value) {
    let value = initial_value;
    for (const item of iterable) {
        value = callback(value, item)
    }

    return value;
}

/**
 * @template T, U
 * @param {Iterable<T>} iterable 
 * @param {(item: T) => U} callback 
 * @returns {IterableIterator<U>}
 */
export function* map(iterable, callback) {
    for (const item of iterable) {
        yield callback(item);
    }
}

/**
 * @param {Fraction} a 
 * @param {Fraction} b 
 * @returns {Fraction}
 */
export function fractionMax(a, b) {
    if (mathjs.smaller(a, b))
        return b;
    return a;
}

// Replace with "," to insert commas in a number with a decimal point, or a formatted
// fraction. Won't insert commas after the decimal point.
let _COMMA_NUMBER_FORMAT_REGEX = /(?<!\..*)\B(?=(?:\d{3})+(?!\d))/g;

/**
 * @param {Fraction} frac 
 * @param {"ratio" | "decimal" | "try-integer"} format
 * @param {boolean} commas
 * @returns {string}
 */
export function formatFrac(frac, format="ratio", commas=true) {
    let result;
    switch (format) {
        case "ratio":
            result = mathjs.format(frac, { fraction: 'ratio' });
            break;

        case "decimal":
            if (-1 != g_.config.max_decimals) {
                frac = mathjs.round(frac, g_.config.max_decimals);
            }

            result = mathjs.format(frac, { fraction: 'decimal' });
            break;

        case "try-integer":
            return formatFrac(
                frac,
                mathjs.isInteger(frac) ? "decimal" : "ratio",
                commas
            );

        default:
            assert(false);
    }
    
    if (commas)
        result = result.replace(_COMMA_NUMBER_FORMAT_REGEX, ',');

    return result;
}

/**
 * @param {string} str
 * @returns {Fraction?}
 */
export function parseFrac(str) {
    try
    {
        return fraction(str.replaceAll(',', ''));
    } catch {
        return null;
    }
}

export function deepFreeze(obj) {
    for (const key of Object.getOwnPropertyNames(obj)) {
        const value = obj[key];

        if ((value !== null) &&
            (typeof value === "object") &&
            !Object.isFrozen(value)
        ) {
            deepFreeze(value);
        }
    }

    Object.freeze(obj);
}