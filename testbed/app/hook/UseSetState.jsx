import {useSetState} from '@havlasme/react-toolkit'
import {useCallback} from 'react'

const UseSetStateTestBed = function () {
  const [state, set] = useSetState({key1: 0, key2: 'example'})

  const onClickCallback = useCallback(function (event) {
    set(function (current) {
      return {[event.target.name]: current[event.target.name] + 1}
    })
  }, [set])

  const onClickConstantCallback = useCallback(function (event) {
    set({[event.target.name]: 'test'})
  }, [set])

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useSetState (state: {JSON.stringify(state)})
      </h2>

      <div className="py-3 px-4 grow">
        The `useSetState` hook returns a state object and a function to update it.
        The update function can also take a partial object. This means we can update only part of the state object, leaving the other parts unchanged.
      </div>

      <div className="flex py-2 px-2 gap-4 justify-end">
        <button name="key1" type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Update `key1`
        </button>

        <button name="key2" type="button" onClick={onClickConstantCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Update `key2`
        </button>
      </div>
    </div>
  )
}

export default UseSetStateTestBed
