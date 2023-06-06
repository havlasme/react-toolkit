import {useEffect, useSyncExternalStore} from 'react'

const getSnapshot = (function () {
  let memoized = null

  return function () {
    const snapshot = {height: window.innerHeight, width: window.innerWidth}

    if (snapshot.height !== memoized?.height || snapshot.width !== memoized?.width) {
      memoized = snapshot
    }
    return memoized
  }
})()

const subscribe = function (callback) {
  const runCallbackOnEvent = function (event) {
    return callback(event, getSnapshot())
  }
  window.addEventListener('resize', runCallbackOnEvent, {passive: true})
  window.addEventListener('orientationchange', runCallbackOnEvent, {passive: true})

  return function () {
    window.removeEventListener('resize', runCallbackOnEvent)
    window.removeEventListener('orientationchange', runCallbackOnEvent)
  }
}

/**
 * The useWindowSize hook.
 *
 * @param {function} [callback=null]  the event callback.
 * @return {{height: number, width: number}}
 */
const useWindowSize = function (callback = null) {
  if (typeof callback !== 'function' && callback !== null) {
    throw new TypeError('callback must be a function|null.')
  }

  // the window size state.
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

export default useWindowSize
