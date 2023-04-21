import {suspensify, useBoolState} from '@havlasme/react-toolkit'
import {Suspense} from 'react'

const request = suspensify(new Promise(function (resolve) {
  setTimeout(function () {
    resolve(
      'The `suspensify` function is a utility function that makes any asynchronous function suspensible.\n' +
      'This means that you can use it to convert a function that uses promises into a function that can be used with the `Suspense` component.',
    )
  }, 5000)
}))

const SuspensifyComponent = function () {
  return request.read()
}

const SuspensifyTestBed = function () {
  const [state, set] = useBoolState(false)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        suspensify
      </h2>

      <div className="py-3 px-4 grow">
        {state ? (
          <Suspense fallback={'LOADING'}>
            <SuspensifyComponent/>
          </Suspense>
        ) : null}
      </div>

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={set} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {state ? 'UnMount Component' : 'Mount Component'}
        </button>
      </div>
    </div>
  )
}

export default SuspensifyTestBed
