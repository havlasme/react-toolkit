import { useRef } from 'react'

/**
 * The useCallbackRef hook.
 *
 * @param {function} callback  the callback
 * @return {Object}
 * @deprecated
 * @see useLatest
 */
const useCallbackRef = function (callback) {
    const ref = useRef(callback)
    ref.current = callback
    return ref
}

export default useCallbackRef
