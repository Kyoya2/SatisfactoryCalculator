// @ts-check
/**
 * @param {boolean} condition
 * @param {string=} message
 */
export function assert(condition, message) {
    if (!condition) {
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
