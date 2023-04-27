import {useCallback, useState} from 'react'
import useInterval from './useInterval'

const UseIntervalTestBed = function ({delay}) {
  const [state, setState] = useState('interval scheduled...')
  const [count, setCount] = useState(0)
  const [resetId, setResetId] = useState(0)

  const cancelInterval = useInterval(useCallback(
    function () {
      setCount(state => state + 1)
    }, [setCount, resetId]), delay)

  const onClickCallback = useCallback(
    function () {
      cancelInterval()
      setState('interval cancelled!')
    }, [cancelInterval, setState])

  const onResetCallback = useCallback(
    function () {
      setState('interval scheduled...')
      setCount(0)
      setResetId(state => state + 1)
    }, [])

  return (
    <div className="space-y-4">
      <div>
        {state} <strong>({count})</strong>
      </div>

      <div className="space-x-2">
        <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg disabled:opacity-50">
          Cancel Interval
        </button>

        <button type="button" onClick={onResetCallback} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  )
}

export default UseIntervalTestBed
