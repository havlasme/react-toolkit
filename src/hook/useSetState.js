import { converge, identity, is, mergeLeft } from 'ramda'
import { useCallback, useState } from 'react'

/**
 * The useSetState hook.
 *
 * @param {*} initialValue
 * @return {[*, function]}
 */
const useSetState = function (initialValue) {
    const [state, set] = useState(initialValue)

    const setState = useCallback(function (state) {
        if (is(Function, state)) {
            return set(converge(mergeLeft, [state, identity]))
        }
        return set(mergeLeft(state))
    }, [set])

    return [state, setState]
}

export default useSetState
