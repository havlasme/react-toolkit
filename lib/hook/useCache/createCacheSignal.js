/**
 * Create the cache publish-subscribe signaling.
 *
 * @return {{publish: function, subscribe: function, unsubscribe: function}}
 */
const createCacheSignal = function () {
  // the subscribed callback map.
  const subscribed = {}

  /**
   * Publish a cache signal.
   *
   * @param {string} cacheKey  the cache key.
   * @param {any} state  the cache state.
   */
  const publish = function (cacheKey, state) {
    if (!subscribed[cacheKey]) {
      return void 0
    }
    for (let callback of subscribed[cacheKey]) {
      callback(state)
    }
  }
  /**
   * Subscribe a cache signal.
   *
   * @param {string} cacheKey  the cache key.
   * @param {function} callback  the callback.
   */
  const subscribe = function (cacheKey, callback) {
    if (!subscribed[cacheKey]) {
      subscribed[cacheKey] = []
    }
    subscribed[cacheKey].push(callback)
  }
  /**
   * Unsubscribe a cache signal.
   *
   * @param {string} cacheKey  the cache key.
   * @param {function} callback  the callback.
   */
  const unsubscribe = function (cacheKey, callback) {
    if (!subscribed[cacheKey]) {
      return void 0
    }
    const index = subscribed[cacheKey].indexOf(callback)
    if (index !== -1) {
      subscribed[cacheKey].splice(index, 1)
    }
  }

  return {publish, subscribe, unsubscribe}
}

export default createCacheSignal
