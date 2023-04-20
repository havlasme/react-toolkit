import {useWindowSize} from '@havlasme/react-toolkit'

const UseWindowSizeTestBed = function () {
  const state = useWindowSize()

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useWindowSize (state: {JSON.stringify(state)})
      </h2>

      <div className="py-3 px-4 grow">
        The `useBoolState` hook takes an initial boolean value as an argument and returns a tuple with the current state value and a function to update it.
        The update function can be called without any arguments to toggle the boolean value, or with a boolean value to set it directly to the new value.
      </div>
    </div>
  )
}

export default UseWindowSizeTestBed
