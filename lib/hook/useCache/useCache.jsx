import {useCallback, useContext, useSyncExternalStore} from 'react'
import CacheContext from './CacheContext'

/**
 * The useCache hook.
 *
 * @param {string} key  the cache key.
 * @param {any} [initialState=null]  the initial state.
 * @return {[any,function]}
 */
const useCache = function (key, initialState = null) {
  if (typeof key !== 'string') {
    throw new TypeError('key must be a string.')
  }

  // the cache.
  const cache = useContext(CacheContext)
  // the hook must be used within CacheContext.
  if (typeof cache !== 'object' || cache === null) {
    throw new TypeError('cache is not initialized.')
  }

  // the state.
  const state = useSyncExternalStore(
    useCallback(
      function (callback) {
        cache.subscribe(key, callback)

        return function () {
          cache.unsubscribe(key, callback)
        }
      }, [cache, key]),
    useCallback(
      function () {
        if (!cache.has(key)) {
          cache.set(key, initialState)
          return initialState
        }
        return cache.get(key)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cache, key]))

  // the state update callback.
  const setState = useCallback(
    function (value) {
      cache.set(key, value)
    }, [cache, key])

  return [state, setState]
}

export default useCache
