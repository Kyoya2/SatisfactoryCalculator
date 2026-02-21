// @ts-check
import {assert} from "./utils.mjs"

/** @typedef {((...args: *[]) => *)} AnyFunc */

export default class CacheManager {
    constructor() {
        /** 
         * @private
         * @type {Map<AnyFunc, Map<*[], ReturnType<AnyFunc>>>}
         */
        this._cache = new Map();
    }

    /**
    * @template {(...args: any[]) => any} F
    * @param {F} func 
    * @returns {F}
    */
    cacheFunc(func) {
        assert("Function" == func.constructor.name, "Can only cache functions (not generators)");
        assert(!this._cache.has(func), "Function already cached");
        
        /** @type {Map<*[], ReturnType<F>>} */
        let cache = new Map();
        this._cache.set(func, cache);

        /** @this {CacheManager} */
        return function(...args) {
            const args_arr = [...args];
            const cached_value = cache.get(args_arr);
            if (undefined !== cached_value) {
                console.log(`Cache hit for ${func.name}`);
                return cached_value;
            }

            console.log(`Cache miss for ${func.name}`);

            const result = func.apply(this, args_arr);
            cache.set(args_arr, result)
            return result;
        }
    }

    /**
     * 
     * @param {AnyFunc} [func] 
     * @param {*[]} [args] 
     * @returns 
     */
    purge(func, args) {
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
        if (undefined === args) {
            func_cache.clear();
            return;
        }

        // Clear cache of "fun(...args)"
        func_cache.delete(args);
    }
}
