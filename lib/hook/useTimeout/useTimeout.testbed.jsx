import {useCallback, useState} from 'react'
import useTimeout from './useTimeout'

const UseTimeoutTestBed = function ({delay}) {
  const [state, setState] = useState('timeout scheduled...')
  const [resetId, setResetId] = useState(0)

  const cancelTimeout = useTimeout(useCallback(
    function () {
      setState('timeout expired!')
    }, [setState, resetId]), delay)

  const onClickCallback = useCallback(
    function () {
      cancelTimeout()
      setState('timeout cancelled!')
    }, [cancelTimeout, setState])

  const onResetCallback = useCallback(
    function () {
      setState('timeout scheduled...')
      setResetId(state => state + 1)
    }, [setState, setResetId])

  return (
    <div className="space-y-4">
      <div>
        {state}
      </div>

      <div className="space-x-2">
        <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg disabled:opacity-50">
          Cancel
        </button>

        <button type="button" onClick={onResetCallback} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  )
}

export default UseTimeoutTestBed
