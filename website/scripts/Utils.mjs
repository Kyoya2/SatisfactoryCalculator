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
export function formatFrac(frac, as_ratio=true, opt_denom=false) {
    if (as_ratio && opt_denom && (1 == frac.d))
        return frac.n.toString();

    return format(frac, { fraction: as_ratio ? 'ratio' : 'decimal' });
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