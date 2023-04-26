import {equals} from 'ramda'
import {useMemo, useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return {height: window.innerHeight, width: window.innerWidth}
}

const subscribe = function (callback) {
  window.addEventListener('resize', callback)

  return function () {
    window.removeEventListener('resize', callback)
  }
}

/**
 * The useWindowSize hook.
 *
 * @return {{width : *, height : *}}
 * @example
 *
 * const Component = function () {
 *   const windowSize = useWindowSize()
 *
 *   return (
 *     <div>
 *       window width: {windowSize.width}<br/>
 *       window height: {windowSize.height}
 *     </div>
 *   )
 * }
 */
const useWindowSize = function () {
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

  return useSyncExternalStore(subscribe, getMemoSnapshot)
}

export default useWindowSize
