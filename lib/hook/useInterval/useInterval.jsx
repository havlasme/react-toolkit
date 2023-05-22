import {useCallback, useLayoutEffect, useRef} from 'react'

/**
 * The useInterval hook.
 *
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule interval when `null`
 * @return {function}
 */
const useInterval = function (callback, delay = null) {
  // the interval instance ref.
  const intervalRef = useRef(null)

  // the cancel interval callback.
  const cancelInterval = useCallback(
    function () {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }, [])

  // schedule the interval.
  useLayoutEffect(
    function () {
      if (delay !== null) {
        intervalRef.current = setInterval(callback, delay)
        return cancelInterval
      }
    }, [callback, delay])

  return cancelInterval
}

export default useInterval
