import {useCallback} from 'react'
import useObservable from './useObservable'

const observable$ = (function () {
  const subscribed = []

  const subscribe = function (callback) {
    subscribed.push(callback)
    return {
      unsubscribe: function () {
        const index = subscribed.indexOf(callback)
        if (index !== -1) {
          subscribed.splice(index, 1)
        }
      },
    }
  }

  const next = function (nextState) {
    for (let callback of subscribed) {
      callback(nextState)
    }
  }

  return {subscribe, next}
})()

const UseObservableTestBed = function ({initialState}) {
  const [state, dispatch] = useObservable(observable$, initialState)
  const [state2] = useObservable(observable$, initialState)

  const dispatchState = useCallback(
    function () {
      dispatch('test' + Math.round(Math.random() * 1000))
    }, [dispatch])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state: {String(state)} / {String(state2)}
      </div>

      <div className="space-x-2">
        <button type="button" onClick={dispatchState} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Dispatch state
        </button>
      </div>
    </div>
  )
}

export default UseObservableTestBed
