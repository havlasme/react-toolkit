import {useCallback} from 'react'
import useCache from './useCache'

const UseCacheTestBed = function () {
  const [state, setState] = useCache('test')
  const [state2] = useCache('test')

  const updateStateCallback = useCallback(
    function () {
      setState('test' + Math.round(Math.random() * 100))
    }, [])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state: {String(state)} / {String(state2)}
      </div>

      <div className="space-x-2">
        <button type="button" onClick={updateStateCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Update state
        </button>
      </div>
    </div>
  )
}

export default UseCacheTestBed
