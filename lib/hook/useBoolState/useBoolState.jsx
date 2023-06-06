import {useCallback, useState} from 'react'
import runCallable from '../../util/runCallable'

/**
 * The useBoolState hook.
 *
 * @param {boolean|function} initialState  the initial state.
 * @return {[boolean, function]}
 */
const useBoolState = function (initialState) {
  if (typeof initialState !== 'boolean' && typeof initialState !== 'function') {
    throw new TypeError('initialState must be a boolean|function.')
  }

  // the state. must be a `boolean` value.
  const [state, setState] = useState(initialState)

  // the state update callback.
  const setBoolState = useCallback(
    function (nextState) {
      setState(function (state) {
        const newState = runCallable(nextState, state)
        if (typeof newState === 'boolean') {
          return newState
        }
        return !state
      })
    }, [setState])

  return [state, setBoolState]
}

export default useBoolState
