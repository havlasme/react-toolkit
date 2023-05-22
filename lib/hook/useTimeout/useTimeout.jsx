import {useCallback, useLayoutEffect, useRef} from 'react'

/**
 * The useTimeout hook.
 *
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule timeout when `null`.
 * @return {function}
 */
const useTimeout = function (callback, delay = null) {
  // the timeout instance ref.
  const timeoutRef = useRef(null)

  // the cancel timeout callback.
  const cancelTimeout = useCallback(
    function () {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }, [])

  // schedule the timeout.
  useLayoutEffect(
    function () {
      if (delay !== null) {
        timeoutRef.current = setTimeout(callback, delay)
        return cancelTimeout
      }
    }, [callback, delay])

  return cancelTimeout
}

export default useTimeout
