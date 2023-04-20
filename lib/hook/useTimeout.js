import { isNil } from 'ramda'
import { useCallback, useEffect, useRef } from 'react'

/**
 * The useTimeout hook.
 *
 * @param {function} callback  the callback
 * @param {number} timeout  the time (in milliseconds)
 * @param {boolean} [run=true]  do not initiate the timeout until set to true
 * @return {function}
 */
const useTimeout = function (callback, timeout, run = true) {
    const timeoutID = useRef(void 0)

    const cancel = useCallback(function () {
        if (isNil(timeoutID.current)) return void 0

        timeoutID.current = clearTimeout(timeoutID.current)
    }, [timeoutID])

    useEffect(function () {
        if (!run) return void 0

        timeoutID.current = setTimeout(callback, Math.max(0, timeout))

        return cancel
    }, [callback, run, timeout, timeoutID])

    return cancel
}

export default useTimeout
