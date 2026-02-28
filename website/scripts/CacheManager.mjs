// @ts-check
import {assert} from "./utils.mjs"

/** @typedef {(([arg]: *) => *)} AnyFunc */

/**
 * Only supports caching of functions with 1 or 0 primitive arguments.
 */
export default class CacheManager {
    constructor() {
        /** 
         * @private
         * @type {Map<AnyFunc, Map<*[], ReturnType<AnyFunc>>>}
         */
        this._cache = new Map();
    }

    /**
     * @template {(this: *, arg: *) => any} F
     * @param {F} func 
     * @returns {F}
     */
    cacheFunc(func) {
        assert("Function" == func.constructor.name, "Can only cache functions (not generators)");
        assert(!this._cache.has(func), "Function already cached");
        
        /** @type {Map<*[], ReturnType<F>>} */
        let cache = new Map();
        this._cache.set(func, cache);

        /** @type {F} */
        return function(arg) {
            const cached_value = cache.get(arg);
            if (undefined !== cached_value) {
                console.log(`Cache hit for ${func.name}`);
                return cached_value;
            }

            console.log(`Cache miss for ${func.name}`);

            const result = func.call(this, arg);
            cache.set(arg, result)
            return result;
        }
    }

    /**
     * 
     * @param {AnyFunc} [func] 
     * @param {*} [arg] 
     * @returns 
     */
    purge(func, arg) {
        console.log("Purging cache");

        // Clear all cache
        if (undefined === func) {
            for (let cache of this._cache.values())
                cache.clear();
            return;
        }
        
        let func_cache = this._cache.get(func);

        assert(undefined !== func_cache, "Function isn't cached");

        // Clear all cache of "fun"
        if (undefined === arg) {
            func_cache.clear();
            return;
        }

        // Clear cache of "fun(...args)"
        func_cache.delete(arg);
    }
}
