import useBoolState from './useBoolState'

const UseBoolStateTestBed = function () {
  const [state, setState] = useBoolState(true)
  const className = state ? 'text-green-500' : 'text-red-500'

  return (
    <div className="space-y-4">
      <div>
        current state: <strong className={className}>{state.toString()}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={() => setState()} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Toggle State
        </button>

        <button type="button" onClick={() => setState(true)} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Set To True
        </button>

        <button type="button" onClick={() => setState(false)} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Set To False
        </button>
      </div>
    </div>
  )
}

export default UseBoolStateTestBed
