import {useCallback, useLayoutEffect, useState} from 'react'

/**
 * The useObservable hook.
 *
 * @param {Object} observable$  the observable.
 * @param {any} [initialState=null]  the initial state.
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

  // subscribe to the observable. update the state on each emission.
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
