import {useCallback, useState} from 'react'
import runCallable from '../../util/runCallable'

/**
 * The useSetState hook.
 *
 * @param {Object} [initialState]  the initial state.
 * @return {[Object, function]}
 * @example
 *
 * const Component = function () {
 *   const [state, set] = useSetState({ prop1: 'value1', prop2: 'value2' })
 *
 *   useEffect(function () {
 *       set({ prop2: 'new-value' })
 *       // the state should contain { prop1: 'value1', prop2: 'new-value' }
 *   }, [])
 *
 *   return null
 * }
 */
const useSetState = function (initialState = {}) {
  const [state, set] = useState(initialState)

  const setState = useCallback(function (next) {
    set(function (state) {
      return {
        ...state,
        ...runCallable(next, state),
      }
    })
  }, [set])

  return [state, setState]
}

export default useSetState
