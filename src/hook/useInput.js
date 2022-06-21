import { useCallback, useState } from 'react'

/**
 * The useInput hook.
 *
 * @param {*} [initialState]
 * @return {*}
 * @example
 *
 * const Component = function () {
 *   const [state, bind] = useInput()
 *
 *   return (
 *     <input value={state} onChange={bind}/>
 *   )
 * }
 */
const useInput = function (initialState = '') {
    const [state, set] = useState(initialState)

    const bind = useCallback(function (event) {
        set(event.target.value)
    }, [set])

    return [state, bind, set]
}

export default useInput
