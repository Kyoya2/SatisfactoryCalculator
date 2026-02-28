// @ts-check
/**
 * @param {boolean} condition
 * @param {string=} message
 */
export function assert(condition, message) {
    if (!condition) {
        debugger;
        throw new Error(message || "Assertion failed");
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
