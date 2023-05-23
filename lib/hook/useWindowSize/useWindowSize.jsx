import {equals} from 'ramda'
import {useLayoutEffect, useMemo, useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return {height: window.innerHeight, width: window.innerWidth}
}

const subscribe = function (callback) {
  const onEvent = function () {
    return callback(getSnapshot())
  }
  window.addEventListener('resize', onEvent)

  return function () {
    window.removeEventListener('resize', onEvent)
  }
}

/**
 * The useWindowSize hook.
 *
 * @param {function} [callback=null]  the resize event callback.
 * @return {{width : number, height : number}}
 */
const useWindowSize = function (callback = null) {
  const getMemoSnapshot = useMemo(function () {
    let memo = null

    return function () {
      const snapshot = getSnapshot()

      if (!equals(memo, snapshot)) {
        memo = snapshot
      }
      return memo
    }
  }, [])

  useLayoutEffect(
    function () {
      if (typeof callback === 'function') {
        return subscribe(callback)
      }
    }, [callback])

  return useSyncExternalStore(subscribe, getMemoSnapshot)
}

export default useWindowSize
