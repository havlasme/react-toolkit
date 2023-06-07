import {useCallback, useLayoutEffect, useRef} from 'react'

/**
 * The useInterval hook.
 *
 * @param {function} callback  the callback.
 * @param {int|null} [interval=null]  the interval (in ms). do not schedule interval when `null`
 * @return {function}
 */
const useInterval = function (callback, interval = null) {
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
      if (interval !== null) {
        intervalRef.current = setInterval(callback, interval)
        return cancelInterval
      }
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback, interval])

  return cancelInterval
}

export default useInterval
