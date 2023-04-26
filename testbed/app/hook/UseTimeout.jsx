import {useBoolState, useTimeout} from '@havlasme/react-toolkit'
import {useCallback, useState} from 'react'

const UseTimeoutTestBed = function () {
  const [state, setState] = useState('timeout scheduled in 3000 ms...')
  const cancelTimeout = useTimeout(useCallback(function () {
    setState('timeout expired!')
  }, [setState]), 3000)

  const onClickCallback = useCallback(function() {
    cancelTimeout()
    setState('timeout cancelled!')
  }, [cancelTimeout, setState])

  return (
    <div className="py-3 px-4 bg-neutral-100">
      {state}

      <div className="flex justify-end">
        <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full disabled:opacity-50">
          Cancel
        </button>
      </div>
    </div>
  )
}

const UseTimeoutTestBedSource = `
const [state, setState] = useState('timeout scheduled in 5000 ms...')
const cancelTimeout = useTimeout(useCallback(function () {
  setState('timeout expired!')
}, [setState]), 5000)

const onClickCallback = useCallback(function() {
  cancelTimeout()
  setState('timeout cancelled!')
}, [cancelTimeout, setState])

return (
  <div>
    {state}

    <div>
      <button disabled={state.includes('!')} type="button" onClick={onClickCallback}>
        Cancel
      </button>
    </div>
  </div>
)
`

const UseTimeout = function () {
  const [mount, setMount] = useBoolState(false)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useTimeout
      </h2>

      <div className="py-3 px-4 space-y-4 grow">
        <p>
          The `useTimeout` hook allows to declarative create a timeout in a component.
          The hook takes a callback function and a delay in milliseconds as parameters, and returns a function that can cancel the timeout.
          The callback function passed to `useTimeout` must be stable.
        </p>

        <code className="block py-3 px-4 bg-neutral-200 whitespace-pre overflow-x-auto">
          {UseTimeoutTestBedSource.trim()}
        </code>

        {mount ? (
          <UseTimeoutTestBed/>
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

export default UseTimeout
