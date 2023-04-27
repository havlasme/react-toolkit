import useSearchState from './useSearchState'

const UseSearchStateTestBed = function () {
  const [state, setState] = useSearchState('example')

  return (
    <div className="space-y-4">
      <div>
        current state: <strong>{state}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={() => setState('')} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Reset
        </button>

        <button type="button" onClick={() => setState('test-value')} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          Set State
        </button>
      </div>
    </div>
  )
}

export default UseSearchStateTestBed
