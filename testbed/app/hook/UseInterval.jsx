import {useBoolState, useInterval} from '@havlasme/react-toolkit'
import {useCallback, useState} from 'react'

const UseIntervalTestBed = function () {
  const [state, setState] = useState('interval scheduled in 3000 ms...')
  const [count, setCount] = useState(0)
  const cancelInterval = useInterval(useCallback(function () {
    setCount(state => state + 1)
  }, [setState]), 3000)

  const onClickCallback = useCallback(function () {
    cancelInterval()
    setState('interval cancelled!')
  }, [cancelInterval, setState])

  return (
    <div className="py-3 px-4 bg-neutral-100">
      {state} ({count})

      <div className="flex justify-end">
        <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full disabled:opacity-50">
          Cancel
        </button>
      </div>
    </div>
  )
}

const UseIntervalTestBedSource = `
const [state, setState] = useState('interval scheduled in 3000 ms...')
const [count, setCount] = useState(0)
const cancelInterval = useInterval(useCallback(function () {
  setState('interval scheduled in 3000 ms...')
  setCount(state => state + 1)
}, [setState]), 3000)

const onClickCallback = useCallback(function () {
  cancelInterval()
  setState('interval cancelled!')
}, [cancelInterval, setState])

return (
  <div className="py-3 px-4 bg-neutral-100">
    {state} ({count})

    <div className="flex justify-end">
      <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full disabled:opacity-50">
        Cancel
      </button>
    </div>
  </div>
)
`

const UseInterval = function () {
  const [mount, setMount] = useBoolState(false)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useInterval
      </h2>

      <div className="py-3 px-4 space-y-4 grow">
        <p>
          The `useInterval` hook is declarative way to create a interval in a component.
          The hook takes a callback function and a delay in milliseconds as parameters, and returns a function that can cancel the interval.
          The callback function passed to `useInterval` must be stable.
        </p>

        <code className="block py-3 px-4 bg-neutral-200 whitespace-pre overflow-x-auto">
          {UseIntervalTestBedSource.trim()}
        </code>

        {mount ? (
          <UseIntervalTestBed/>
        ) : null}
      </div>

      <div className="flex py-2 px-4 justify-end">
        <button type="button" onClick={setMount} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {mount ? 'UnMount' : 'Mount'}
        </button>
      </div>
    </div>
  )
}

export default UseInterval
