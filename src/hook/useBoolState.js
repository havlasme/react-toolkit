import { is, not } from 'ramda'
import { useCallback, useState } from 'react'

/**
 * The useBoolState hook.
 *
 * @param {boolean} initialValue
 * @return {[boolean, function]}
 */
const useBoolState = function (initialValue) {
    const [value, set] = useState(initialValue)

    const toggle = useCallback(function (next) {
        set(is(Boolean, next) ? next : not)
    }, [set])

    return [value, toggle]
}

export default useBoolState
