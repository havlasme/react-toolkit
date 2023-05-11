import {useCallback, useState} from 'react'

/**
 * The useBoolState hook.
 *
 * @param {boolean} initialState  the initial state.
 * @return {[boolean, function]}
 */
const useBoolState = function (initialState) {
  if (typeof initialState !== 'boolean') {
    throw new TypeError('initialState must be a boolean.')
  }

  // the state. must be a `boolean` value.
  const [state, setState] = useState(initialState)

  // the state update callback.
  // set the state to a boolean value.
  // toggle current state value when `next` is not set (or non-boolean).
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
