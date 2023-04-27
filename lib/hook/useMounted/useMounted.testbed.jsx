import {useCallback, useState} from 'react'
import useMounted from './useMounted'

const UseMountedTestBed = function () {
  const [state, setState] = useState(0)

  const mounted = useMounted(function () {
    console.log('executed only once at component mount')
  })

  const onClickCallback = useCallback(
    function () {
      setState(state => state + 1)
    }, [setState])

  return (
    <div className="space-y-4">
      <div>
        mounted: <strong>{mounted.toString()}</strong><br/>
        current state: <strong>{state}</strong><br/>
        <small>@see console.log</small>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={onClickCallback} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Update State
        </button>
      </div>
    </div>
  )
}

export default UseMountedTestBed
