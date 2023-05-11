import {useCallback, useState} from 'react'
import useTimeout from './useTimeout'

const UseTimeoutTestBed = function ({delay}) {
  const [state, setState] = useState('timeout scheduled...')

  const cancelTimeout = useTimeout(useCallback(
    function () {
      setState('timeout expired!')
    }, [setState]), delay)

  const onClickCallback = useCallback(
    function () {
      cancelTimeout()
      setState('timeout cancelled!')
    }, [cancelTimeout, setState])

  return (
    <div className="space-y-4">
      <div>
        {state}
      </div>

      <div className="space-x-2">
        <button disabled={state.includes('!')} type="button" onClick={onClickCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Cancel timeout
        </button>
      </div>
    </div>
  )
}

export default UseTimeoutTestBed
