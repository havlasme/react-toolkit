import {useCallback, useLayoutEffect, useState} from 'react'

/**
 * The useObservable hook.
 *
 * @param {Object} observable$  the observable.
 * @param {any} initialState  the initial state.
 * @return {[any,function]}
 */
const useObservable = function (observable$, initialState = null) {
  // the state. last value emitted by the observable.
  const [state, setState] = useState(initialState)

  // the dispatch callback.
  const dispatch = useCallback(
    function (nextState) {
      observable$.next(nextState)
    }, [observable$])

  // subscribe to the observable. on every new value, update the state.
  useLayoutEffect(
    function () {
      const subscription = observable$.subscribe(
        function (nextState) {
          setState(nextState)
        })

      return function () {
        subscription.unsubscribe()
      }
    }, [observable$])

  return [state, dispatch]
}

export default useObservable