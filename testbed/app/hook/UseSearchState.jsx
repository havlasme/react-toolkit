import {useSearchState} from '@havlasme/react-toolkit'
import {useCallback} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const UseSearchStateComponent = function () {
  const [state, set] = useSearchState('example')

  const onClickCallback = useCallback(function () {
    set('testvalue')
  }, [set])

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useSearchState (state: {state})
      </h2>

      <div className="py-3 px-4 grow">
        The `useBoolState` hook takes an initial boolean value as an argument and returns a tuple with the current state value and a function to update it.
        The update function can be called without any arguments to toggle the boolean value, or with a boolean value to set it directly to the new value.
      </div>

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Update State
        </button>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '*',
    element: <UseSearchStateComponent/>,
  },
])

const UseSearchStateTestBed = function () {
  return (
    <RouterProvider router={router}/>
  )
}

export default UseSearchStateTestBed
