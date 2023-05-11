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
  const interval = useRef(null)

  // the cancel interval callback.
  const cancelInterval = useCallback(
    function () {
      if (interval.current !== null) {
        clearInterval(interval.current)
        interval.current = null
      }
    }, [])

  useLayoutEffect(
    function () {
      if (delay !== null) {
        interval.current = setInterval(callback, delay)
        return cancelInterval
      }
    }, [callback, delay])

  return cancelInterval
}

export default useInterval
