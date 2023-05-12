import {useCallback, useContext, useSyncExternalStore} from 'react'
import CacheContext from './CacheContext'

/**
 * The useCache hook.
 *
 * @param {string} key  the cache key.
 * @return {[any,function]}
 */
const useCache = function (key) {
  if (typeof key !== 'string') {
    throw new TypeError('key must be a string.')
  }
  // the cache and the signal.
  const [cache, signal] = useContext(CacheContext)

  // the state.
  // initialize with the cached value,
  // and subscribe to the cache update event.
  const state = useSyncExternalStore(
    useCallback(
      function (callback) {
        signal.subscribe(key, callback)

        return function () {
          signal.unsubscribe(key, callback)
        }
      }, [key, signal]),
    useCallback(
      function () {
        return cache.get(key)
      }, [cache, key]))

  // the state update callback.
  // update the cache and publish an event.
  const setState = useCallback(
    function (value) {
      cache.set(key, value)
      signal.publish(key, value)
    }, [cache, key, signal])

  return [state, setState]
}

export default useCache
