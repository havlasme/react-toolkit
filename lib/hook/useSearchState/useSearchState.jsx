import {useCallback} from 'react'
import {useSearchParams} from 'react-router-dom'

/**
 * The useSearchState hook.
 * Must have installed `react-router-dom` dependency at the project.
 *
 * @param {string} key  the key.
 * @return {Array}
 */
const useSearchState = function (key) {
  // @see https://reactrouter.com/en/main/hooks/use-search-params
  const [state, setState] = useSearchParams()

  // update the value at `key`. keep the rest intact.
  const setSearchState = useCallback(
    function (nextState) {
      setState(function (state) {
        state.set(key, nextState)
        return state
      })
      // the `setState` must be a dependency to keep `state` value synchronized!
    }, [key, setState])

  return [state.get(key), setSearchState]
}

export default useSearchState
