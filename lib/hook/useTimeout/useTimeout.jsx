import {useCallback, useLayoutEffect, useRef} from 'react'

/**
 * The useTimeout hook.
 *
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule timeout when `null`
 * @return {function}
 */
const useTimeout = function (callback, delay = null) {
  const timeout = useRef(null)

  const cancelTimeout = useCallback(function () {
    if (timeout.current !== null) {
      clearTimeout(timeout.current)
      timeout.current = null
    }
  }, [])

  useLayoutEffect(function () {
    if (delay !== null) {
      timeout.current = setTimeout(callback, delay)
      return cancelTimeout
    }
  }, [callback, delay, cancelTimeout])

  return cancelTimeout
}

export default useTimeout
