import { useCallback, useState } from 'react'

/**
 * The useInputState hook.
 *
 * @param {*} initialState
 * @return {*}
 */
const useInputState = function (initialState = null) {
    const [state, set] = useState(initialState)

    const bind = useCallback(function (event) {
        set(event.currentTarget.value)
    }, [set])

    return [state, bind, set]
}

export default useInputState
