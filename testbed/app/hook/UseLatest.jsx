import {useLatest} from '@havlasme/react-toolkit'
import {useCallback, useState} from 'react'

const UseLatestTestBed = function () {
  const [state, set] = useState(0)
  const stateLatest = useLatest(state)

  const onClickCallback = useCallback(function () {
    set(state => state + 1)
  }, [set])

  const onClickAlertCallback = useCallback(function () {
    setTimeout(function () {
      alert(`current value: "${stateLatest.current}"`)
    }, 3000)
  }, [stateLatest])

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useLatest (state: {state})
      </h2>

      <div className="py-3 px-4 grow">
        The `useLatest` hook keeps track of the latest value passed as its first argument.
        This hook is useful in when working with asynchronous callbacks and you want to ensure that it always have access to the most up-to-date value.
      </div>

      <div className="flex py-2 px-2 gap-4 justify-end">
        <button type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Update State
        </button>

        <button type="button" onClick={onClickAlertCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Alert
        </button>
      </div>
    </div>
  )
}

export default UseLatestTestBed
