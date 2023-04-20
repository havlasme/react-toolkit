import {useCallback} from 'react'
import {useSearchParams} from 'react-router-dom'

/**
 * The useSearchState hook.
 * Must have installed `react-router-dom` dependency at the project.
 *
 * @param {string} key  the key.
 * @return {Array}
 * @example
 *
 * const Component = function () {
 *   const [state, set] = useSearchState('keyName')
 *
 *   const onClickCallback = useCallback(function() {
 *     set('updated')
 *   })
 *
 *   return (
 *     <div>
 *       <div>
 *         The key (`keyName`) contains value: `{state}`
 *       </div>
 *
 *       <button type="button" onClick={onClickCallback}>
 *         Set Value
 *       </button>
 *     </div>
 *   )
 * }
 */
const useSearchState = function (key) {
  // @see https://reactrouter.com/en/main/hooks/use-search-params
  const [state, set] = useSearchParams()

  // update the value at `key`. keep the rest intact
  const update = useCallback(function (next) {
    set(function (prev) {
      prev.set(key, next)
      return prev
    })
    // the `set` must be a dependency to keep `prev` value synchronized
  }, [key, set])

  return [state.get(key), update]
}

export default useSearchState
