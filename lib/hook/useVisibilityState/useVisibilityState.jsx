import {useLayoutEffect, useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return document.visibilityState === 'visible'
}

const subscribe = function (callback) {
  const onEvent = function () {
    return callback(getSnapshot())
  }
  document.addEventListener('visibilitychange', onEvent)

  return function () {
    document.removeEventListener('visibilitychange', onEvent)
  }
}

/**
 * The useVisibilityState hook.
 *
 * @param {function} [callback=null]  the visibilitychange event callback.
 * @return {boolean}
 */
const useVisibilityState = function (callback = null) {
  useLayoutEffect(
    function () {
      if (typeof callback !== 'function') {
        return void 0
      }
      return subscribe(callback)
    }, [callback])

  return useSyncExternalStore(subscribe, getSnapshot)
}

export default useVisibilityState
