import useWindowSize from './useWindowSize'

const UseWindowSizeTestBed = function () {
  const windowSize = useWindowSize()

  return (
    <div className="space-y-4">
      <div>
        current state: <strong>{JSON.stringify(windowSize)}</strong>
      </div>
    </div>
  )
}

export default UseWindowSizeTestBed
