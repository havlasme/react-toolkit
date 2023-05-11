import useNetworkState from './useNetworkState'

const UseNetworkStateTestBed = function () {
  const networkState = useNetworkState()
  const className = networkState ? 'text-green-500' : 'text-red-500'

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state: <strong className={className}>{String(networkState)}</strong>
      </div>
    </div>
  )
}

export default UseNetworkStateTestBed
