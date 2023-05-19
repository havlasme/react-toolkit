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
  // * set the state to a boolean value.
  // * toggle current value when `nextState` is not set (or non-boolean).
  const setBoolState = useCallback(
    function (nextState) {
      if (typeof nextState === 'boolean') {
        setState(nextState)
        return void 0
      }
      setState(function (state) {
        return !state
      })
    }, [setState])

  return [state, setBoolState]
}

export default useBoolState
