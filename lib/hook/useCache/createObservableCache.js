/**
 * @param {Object} cache  the cache.
 * @return {{get: function, set: function, subscribe: function, unsubscribe: function}}
 * @private
 */
const createObservableCache = function (cache) {
  const observable = {}

  /**
   * @param {string} cacheKey  the cache key.
   * @param {any} state  the cache state.
   */
  const set = function (cacheKey, state) {
    cache.set(cacheKey, state)
    if (observable[cacheKey]) {
      for (const callback of observable[cacheKey]) {
        callback(state)
      }
    }
  }
  /**
   * @param {string} cacheKey  the cache key.
   * @param {function} callback  the callback.
   */
  const subscribe = function (cacheKey, callback) {
    if (!observable[cacheKey]) {
      observable[cacheKey] = []
    }
    observable[cacheKey].push(callback)
  }
  /**
   * @param {string} cacheKey  the cache key.
   * @param {function} callback  the callback.
   */
  const unsubscribe = function (cacheKey, callback) {
    if (observable[cacheKey]) {
      const index = observable[cacheKey].indexOf(callback)
      if (index !== -1) {
        observable[cacheKey].splice(index, 1)
      }
    }
  }
  /**
   * @return {Object}
   */
  const getCache = function () {
    return cache
  }

  return {get: cache.get, has: cache.has, set, subscribe, unsubscribe, getCache}
}

export default createObservableCache
