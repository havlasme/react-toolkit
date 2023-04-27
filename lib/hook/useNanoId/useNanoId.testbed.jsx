import {useCallback, useState} from 'react'
import useNanoId from './useNanoId'

const UseNanoIdTestBed = function ({id}) {
  const [state, setState] = useState(0)
  const nanoid = useNanoId(id)

  const onClickCallback = useCallback(
    function () {
      setState(state => state + 1)
    }, [setState])

  return (
    <div className="space-y-4">
      <div>
        nanoid: {nanoid}<br/>
        current state: {state}
      </div>

      <div className="space-x-2">
        <button type="button" onClick={onClickCallback} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Update State
        </button>
      </div>
    </div>
  )
}

export default UseNanoIdTestBed
