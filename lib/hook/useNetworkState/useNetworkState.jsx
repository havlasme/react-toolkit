import {useLayoutEffect, useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return navigator.onLine
}

const subscribe = function (callback) {
  const onEvent = function () {
    return callback(getSnapshot())
  }
  window.addEventListener('online', onEvent)
  window.addEventListener('offline', onEvent)

  return function () {
    window.removeEventListener('online', onEvent)
    window.removeEventListener('offline', onEvent)
  }
}

/**
 * The useNetworkState hook.
 *
 * @param {function} [callback=null]  the online/offline event callback.
 * @return {boolean}
 */
const useNetworkState = function (callback = null) {
  useLayoutEffect(
    function () {
      if (typeof callback === 'function') {
        return subscribe(callback)
      }
    }, [callback])

  return useSyncExternalStore(subscribe, getSnapshot)
}

export default useNetworkState
