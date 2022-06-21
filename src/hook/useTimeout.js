import { isNil } from 'ramda'
import { useCallback, useEffect, useRef } from 'react'

/**
 * The useTimeout hook.
 *
 * @param {function} callback  the callback
 * @param {number} timeout  the time (in milliseconds)
 * @param {boolean} [start=true]  do not initiate the timeout until set to true
 * @return {function}
 */
const useTimeout = function (callback, timeout, start = true) {
    const timeoutID = useRef(void 0)

    const cancel = useCallback(function () {
        if (isNil(timeoutID.current)) return void 0

        timeoutID.current = clearTimeout(timeoutID.current)
    }, [timeoutID])

    useEffect(function () {
        timeoutID.current = setTimeout(callback, Math.max(0, timeout))

        return cancel
    }, [callback, start, timeout, timeoutID])

    return cancel
}

export default useTimeout
