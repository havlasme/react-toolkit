import {useBoolState} from '@havlasme/react-toolkit'

const UseBoolStateTestBed = function () {
  const [state, set] = useBoolState(true)

  const example = `
// the current state value is \`${state.toString()}\`
const [state, set] = useBoolState(true)

return (
  <>
    <button type="button" onClick={event => set(true)}>
      Set \`true\`
    </button>
    
    <button type="button" onClick={event => set(false)}>
      Set \`false\`
    </button>
  
    <button type="button" onClick={set}>
      {state ? 'Set \`false\`' : 'Set \`true\`'}
    </button>
  </>
)
`

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useBoolState
      </h2>

      <div className="py-3 px-4 space-y-4 grow">
        <p>
          The `useBoolState` hook takes an initial boolean value as an argument and returns a tuple with the current state value and a function to update it.
          The update function can be called without any arguments to toggle the boolean value, or with a boolean value to set it directly to the new value.
        </p>

        <code className="block whitespace-pre overflow-x-auto">
          {example}
        </code>
      </div>

      <div className="flex py-2 px-2 gap-2 justify-end">
        <button type="button" onClick={event => set(true)}  className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Set `true`
        </button>

        <button type="button" onClick={event => set(false)}  className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Set `false`
        </button>

        <button type="button" onClick={set} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {state ? 'Set `!true`' : 'Set `!false`'}
        </button>
      </div>
    </div>
  )
}

export default UseBoolStateTestBed
