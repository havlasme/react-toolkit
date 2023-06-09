import {useCallback} from 'react'
import useSetState from '../useSetState'

/**
 * The useRequest hook.
 *
 * @param {function} request  the request. must return `Promise`.
 * @return {[Object,function]}
 */
const useRequest = function (request) {
  // the state. last request state.
  const [state, setState] = useSetState({
    exception: null, fetching: false, initialized: false, loading: false, ok: false, response: null,
  })

  // the dispatch callback.
  const dispatch = useCallback(
    function (...rest) {
      setState(function (state) {
        return {exception: null, fetching: true, loading: !state.initialized, response: null}
      })

      return request(...rest)
        .then(
          function (response) {
            setState({
              fetching: false, initialized: true, loading: false, ok: true, response: response ?? null,
            })
            return response
          },
          function (response) {
            setState({
              exception: response ?? null, fetching: false, initialized: true, loading: false, ok: false, response: response?.response ?? null,
            })
            return response
          })
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [request])

  return [state, dispatch]
}

export default useRequest
