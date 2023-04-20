import {useNanoId} from '@havlasme/react-toolkit'
import {useCallback, useState} from 'react'

const UseNanoIdTestBed = function () {
  const [state, set] = useState(0)
  const nanoid = useNanoId()

  const onClickCallback = useCallback(function () {
    set(state => state + 1)
  }, [set])

  return (
    <div className="bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useNanoId (state: {state}; nanoid: {nanoid})
      </h2>

      <div className="py-3 px-4">
        The `useNanoId` hook uses the `nanoid` library to generate a unique id for each instance of a component.
        The generated id remains the same across multiple re-renders of the same instance of a component.
        The hook provides an option to manually specify an id and disable the random generation.

        <label htmlFor={nanoid} className="block mt-4">
          Input Label
        </label>

        <input id={nanoid} className="mt-4 py-1 px-2 w-full border"/>
      </div>

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Update State
        </button>
      </div>
    </div>
  )
}

export default UseNanoIdTestBed
