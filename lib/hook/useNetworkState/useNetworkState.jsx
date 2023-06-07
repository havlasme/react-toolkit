import {useLayoutEffect, useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return navigator.onLine
}

const subscribe = function (callback) {
  const runCallbackOnEvent = function (event) {
    return callback(event, getSnapshot())
  }
  window.addEventListener('online', runCallbackOnEvent, {passive: true})
  window.addEventListener('offline', runCallbackOnEvent, {passive: true})

  return function () {
    window.removeEventListener('online', runCallbackOnEvent)
    window.removeEventListener('offline', runCallbackOnEvent)
  }
}

/**
 * The useNetworkState hook.
 *
 * @param {function} [callback=null]  the event callback.
 * @return {boolean}
 */
const useNetworkState = function (callback = null) {
  if (typeof callback !== 'function' && callback !== null) {
    throw new TypeError('callback must be a function|null.')
  }

  // the network state.
  const state = useSyncExternalStore(subscribe, getSnapshot)

  // optionally, subscribe a callback to the event.
  useLayoutEffect(
    function () {
      if (typeof (callback) === 'function') {
        return subscribe(callback)
      }
    }, [callback])

  return state
}

export default useNetworkState
