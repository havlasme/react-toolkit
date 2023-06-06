import {useCallback} from 'react'
import useBoolState from './useBoolState'

const UseBoolStateTestBed = function ({initialState}) {
  const [state, setState] = useBoolState(initialState)

  const setStateToTrueCallback = useCallback(
    function () {
      setState(true)
    }, [setState])

  const setStateToFalseCallback = useCallback(
    function () {
      setState(false)
    }, [setState])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state:{' '}
        <strong className={state ? 'text-green-500' : 'text-red-500'}>
          {String(state)}
        </strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={setState} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Toggle
        </button>

        <button type="button" onClick={setStateToTrueCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Set to true
        </button>

        <button type="button" onClick={setStateToFalseCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Set to false
        </button>
      </div>
    </div>
  )
}

export default UseBoolStateTestBed
