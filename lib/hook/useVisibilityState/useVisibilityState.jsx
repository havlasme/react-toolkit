import {useEffect, useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return document.visibilityState
}

const subscribe = function (callback) {
  const runCallbackOnEvent = function (event) {
    return callback(event, getSnapshot())
  }
  document.addEventListener('visibilitychange', runCallbackOnEvent, {passive: true})

  return function () {
    document.removeEventListener('visibilitychange', runCallbackOnEvent)
  }
}

/**
 * The useVisibilityState hook.
 *
 * @param {function} [callback=null]  the event callback.
 * @return {string}
 */
const useVisibilityState = function (callback = null) {
  if (typeof callback !== 'function' && callback !== null) {
    throw new TypeError('callback must be a function|null.')
  }

  // the visibility state.
  const state = useSyncExternalStore(subscribe, getSnapshot)

  // optionally, subscribe a callback to the event.
  useEffect(
    function () {
      if (typeof callback === 'function') {
        return subscribe(callback)
      }
    }, [callback])

  return state
}

export default useVisibilityState
