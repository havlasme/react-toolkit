import {useCallback, useState} from 'react'

/**
 * The useBoolState hook.
 *
 * @param {boolean} initialState  the initial state.
 * @return {[boolean, function]}
 * @example
 *
 * const Component = function () {
 *   const [open, toggle] = useBoolState(false)
 *
 *   return (
 *     <div>
 *       <button type="button" onClick={toggle}>
 *         {open ? 'Close' : 'Open'}
 *       </button>
 *
 *       {open ? (
 *         <div>
 *           ...
 *         </div>
 *       ) : null}
 *     </div>
 *   )
 * }
 */

const useBoolState = function (initialState) {
  const [state, set] = useState(initialState)

  const toggle = useCallback(function (next) {
    set(function (state) {
      return typeof next === 'boolean' ? next : !state
    })
  }, [set])

  return [state, toggle]
}

export default useBoolState
