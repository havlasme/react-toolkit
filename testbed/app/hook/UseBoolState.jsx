import {useBoolState} from '@havlasme/react-toolkit'

const UseBoolStateTestBed = function () {
  const [state, set] = useBoolState(true)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useBoolState (state: {state.toString()})
      </h2>

      <div className="py-3 px-4 grow">
        {state ? (
          <p>
            The `useBoolState` hook takes an initial boolean value as an argument and returns a tuple with the current state value and a function to update it.
            The update function can be called without any arguments to toggle the boolean value, or with a boolean value to set it directly to the new value.
          </p>
        ) : null}
      </div>

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={set} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {state ? 'Hide Text' : 'Show Text'}
        </button>
      </div>
    </div>
  )
}

export default UseBoolStateTestBed
