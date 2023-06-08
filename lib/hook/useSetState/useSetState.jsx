import {useCallback, useState} from 'react'
import runCallable from '../../util/runCallable'

/**
 * The useSetState hook.
 *
 * @param {Object|function} [initialState]  the initial state.
 * @return {[Object, function]}
 */
const useSetState = function (initialState = {}) {
  if (typeof initialState !== 'object' && typeof initialState !== 'function') {
    throw new TypeError('initialState must be an object|function.')
  }

  // the state. must be an object.
  const [state, setState] = useState(initialState)

  // the merge state callback.
  const mergeState = useCallback(
    function (nextState) {
      setState(function (state) {
        return {
          ...state,
          ...runCallable(nextState, state),
        }
      })
    }, [setState])

  return [state, mergeState]
}

export default useSetState
