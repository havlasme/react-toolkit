import {useCallback} from 'react'
import useSetState from './useSetState'

const UseSetStateTestBed = function () {
  const [state, setState] = useSetState({count: 0, sample: 'example'})

  const onClickCallback = useCallback(
    function (event) {
      setState(function (current) {
        return {[event.target.name]: current[event.target.name] + 1}
      })
    }, [setState])

  const onClickConstantCallback = useCallback(
    function (event) {
      setState({[event.target.name]: 'test' + Math.round(Math.random() * 100)})
    }, [setState])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        state: {JSON.stringify(state)}
      </div>

      <div className="space-x-2">
        <button name="count" type="button" onClick={onClickCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Update count
        </button>

        <button name="sample" type="button" onClick={onClickConstantCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Update sample
        </button>
      </div>
    </div>
  )
}

export default UseSetStateTestBed
