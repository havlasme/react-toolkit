import {useNetworkState} from '@havlasme/react-toolkit'

const UseNetworkStateTestBed = function () {
  const state = useNetworkState()

  return (
    <div className="bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useNetworkState (state: {state.toString()})
      </h2>

      <div className="py-3 px-4">
        The useNetworkState hook enables the monitoring of network connectivity by providing a boolean value that reflects the online/offline status of the user's device.

        {state ? (
          <div className="mt-4 text-green-500">
            Network is online.
          </div>
        ) : (
          <div className="mt-4 text-red-500">
            Network is offline.
          </div>
        )}
      </div>
    </div>
  )
}

export default UseNetworkStateTestBed
