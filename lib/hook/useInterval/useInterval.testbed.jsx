import {useCallback, useState} from 'react'
import useInterval from './useInterval'

const UseIntervalTestBed = function ({interval}) {
  const [state, setState] = useState('interval scheduled...')
  const [count, setCount] = useState(0)

  const cancelInterval = useInterval(useCallback(
    function () {
      setCount(state => state + 1)
    }, [setCount]), interval)

  const onClickCallback = useCallback(
    function () {
      cancelInterval()
      setState('interval cancelled!')
    }, [cancelInterval, setState])

  return (
    <div className="space-y-4">
      <div>
        {state} <strong>({count})</strong>
      </div>

      <div className="space-x-2">
        <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Cancel interval
        </button>
      </div>
    </div>
  )
}

export default UseIntervalTestBed
