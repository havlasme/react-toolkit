import {useCallback} from 'react'
import useBoolState from '../useBoolState'
import useSetState from '../useSetState'
import useLatest from './useLatest'

const UseLatestTestBed = function () {
  const [state, setState] = useSetState({text: 'test', number: 1})
  const [pending, setPending] = useBoolState(false)
  const stateLatest = useLatest(state)

  const onChangeCallback = useCallback(
    function (event) {
      setState({[event.target.name]: event.target.value})
    }, [setState])

  const onSubmitCallback = useCallback(
    function (event) {
      event.preventDefault()
      setPending(true)

      setTimeout(function () {
        alert(JSON.stringify(stateLatest.current))
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
        <button disabled={pending} type="submit" className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg disabled:opacity-50">
          {pending ? 'Pending...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default UseLatestTestBed
