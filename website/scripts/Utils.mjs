// @ts-check

import {Fraction, smaller, format} from 'mathjs';

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
    if (smaller(a, b))
        return b;
    return a;
}

/**
 * @param {Fraction} frac 
 * @param {boolean} as_ratio?
 * @returns {string}
 */
export function formatFrac(frac, as_ratio=true) {
    return format(frac, { fraction: as_ratio ? 'ratio' : 'decimal' });
}
