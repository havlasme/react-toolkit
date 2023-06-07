import {useCallback} from 'react'
import useNetworkState from './useNetworkState'

const UseNetworkStateTestBed = function () {
  const networkState = useNetworkState(
    useCallback(
      function (event, networkState) {
        console.log('networkState', networkState, event)
      }, []))

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state:{' '}
        <strong className={networkState ? 'text-green-500' : 'text-red-500'}>
          {String(networkState)}
        </strong>
        <br/>
        <small>@see console.log</small>
      </div>
    </div>
  )
}

export default UseNetworkStateTestBed
