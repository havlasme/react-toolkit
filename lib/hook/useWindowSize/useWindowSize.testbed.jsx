import {useCallback} from 'react'
import useWindowSize from './useWindowSize'

const UseWindowSizeTestBed = function () {
  const windowSize = useWindowSize(
    useCallback(
      function (windowSize) {
        console.log('windowSize', windowSize)
      }, []))

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state: <strong>{JSON.stringify(windowSize)}</strong>
        <br/>
        <small>@see console.log</small>
      </div>
    </div>
  )
}

export default UseWindowSizeTestBed
