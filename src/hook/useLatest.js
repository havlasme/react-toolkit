import { useRef } from 'react'

/**
 * The useLatest hook.
 *
 * @param {*} value  the value
 * @return {Object}
 */
const useLatest = function (value) {
    const ref = useRef(value)
    ref.current = value
    return ref
}

export default useLatest
