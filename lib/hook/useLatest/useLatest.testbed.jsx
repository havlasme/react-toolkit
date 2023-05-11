import {useCallback, useState} from 'react'
import lastEventCallback from '../../util/lastEventCallback'
import useBoolState from '../useBoolState'
import useSetState from '../useSetState'
import useLatest from './useLatest'

const UseLatestTestBed = function () {
  const [state, setState] = useSetState({text: 'test', number: 1})
  const [result, setResult] = useState(null)
  const [pending, setPending] = useBoolState(false)
  const stateLatest = useLatest(state)

  const onChangeCallback = useCallback(
    function (event) {
      setState({[event.target.name]: event.target.value})
    }, [setState])

  const onSubmitCallback = useCallback(
    function (event) {
      lastEventCallback(event, {preventDefault: true})

      setPending(true)

      setTimeout(function () {
        setResult(stateLatest.current)
        setPending(false)
      }, 4000)
    }, [stateLatest])

  return (
    <form onSubmit={onSubmitCallback} className="space-y-4">
      <div className="space-y-2">
        <input type="text" name="text" value={state.text} onChange={onChangeCallback} className="block py-1 px-2 border"/>

        <input type="number" name="number" value={state.number} onChange={onChangeCallback} className="block py-1 px-2 border"/>
      </div>

      <div className="space-x-2">
        <button disabled={pending} type="submit" className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          {pending ? 'Pending...' : 'Submit'}
        </button>
      </div>

      <div className="space-y-2">
        <code>{JSON.stringify(result)}</code>
      </div>
    </form>
  )
}

export default UseLatestTestBed
