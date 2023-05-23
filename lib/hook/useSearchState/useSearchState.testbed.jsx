import useSearchState from './useSearchState'

const UseSearchStateTestBed = function () {
  const [state, setState] = useSearchState('example')

  return (
    <div className="space-y-4">
      <div>
        current state: <strong>{String(state)}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={() => setState('')} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Reset
        </button>

        <button type="button" onClick={() => setState('test-value')} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Set state
        </button>
      </div>
    </div>
  )
}

export default UseSearchStateTestBed
