import {useCallback} from 'react'
import useNetworkState from './useNetworkState'

const UseNetworkStateTestBed = function () {
  const networkState = useNetworkState(
    useCallback(
      function (networkState) {
        console.log('networkState', networkState)
      }, []))

  const className = networkState ? 'text-green-500' : 'text-red-500'

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state: <strong className={className}>{String(networkState)}</strong>
        <br/>
        <small>@see console.log</small>
      </div>
    </div>
  )
}

export default UseNetworkStateTestBed
