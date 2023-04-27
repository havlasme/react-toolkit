import {useCallback, useLayoutEffect, useRef} from 'react'

/**
 * The useInterval hook.
 *
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule interval when `null`
 * @return {function}
 */
const useInterval = function (callback, delay = null) {
  const interval = useRef(null)

  const cancelInterval = useCallback(function () {
    if (interval.current !== null) {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [])

  useLayoutEffect(function () {
    if (delay !== null) {
      interval.current = setInterval(callback, delay)
      return cancelInterval
    }
  }, [callback, delay, cancelInterval])

  return cancelInterval
}

export default useInterval
