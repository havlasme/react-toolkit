/**
 * Create a minimal cache, using javascript object.
 *
 * @return {{get: function, set: function, has: function, remove: function, reset: function}}
 */
const createCache = function () {
  // the cache.
  // use plain javascript object as cache.
  const cache = {}

  /**
   * Get the cache value by key.
   *
   * @param {string} key  the cache key.
   * @return {any}
   */
  const get = function (key) {
    return cache[key]
  }
  /**
   * Set the cache value by key.
   *
   * @param {string} key  the cache key.
   * @param {any} value  the value to be cached.
   */
  const set = function (key, value) {
    cache[key] = value
  }
  /**
   * Check if the cache has the key.
   *
   * @param {string} key  the cache key.
   * @returns {boolean}
   */
  const has = function (key) {
    return cache.hasOwnProperty(key)
  }
  /**
   * Remove the cache by key.
   *
   * @param {string} key  the cache key.
   * @return {boolean}
   */
  const remove = function (key) {
    if (cache.hasOwnProperty(key)) {
      delete cache[key]
      return true
    }
    return false
  }
  /**
   * Reset the cache.
   */
  const reset = function () {
    for (let key in cache) {
      if (cache.hasOwnProperty(key)) {
        delete cache[key]
      }
    }
  }

  return {get, set, has, remove, reset}
}

export default createCache
