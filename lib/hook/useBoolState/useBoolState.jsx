import {useCallback, useState} from 'react'

/**
 * The useBoolState hook.
 *
 * @param {boolean} initialState  the initial state.
 * @return {[boolean, function]}
 */
const useBoolState = function (initialState) {
  // the state. must be a `boolean` value.
  const [state, setState] = useState(initialState)

  // the state update callback.
  // set the state to boolean value.
  // toggle the state value when `next` is not set (or non-boolean).
  const setBoolState = useCallback(
    function (next) {
      setState(function (state) {
        return typeof next === 'boolean'
          ? next : !state
      })
    }, [setState])

  return [state, setBoolState]
}

export default useBoolState
