import {useMounted} from '@havlasme/react-toolkit'
import {useCallback, useState} from 'react'

const UseMountedTestBed = function () {
  const [state, set] = useState(0)

  const mounted = useMounted(function () {
    console.log('executed only once at component mount')
  })

  const onClickCallback = useCallback(function () {
    set(state => state + 1)
  }, [set])

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useMounted (state: {state}; mounted: {mounted.toString()})
      </h2>

      {mounted ? (
        <div className="py-3 px-4 grow">
          The `useMounted` hook returns a boolean value that indicates whether the component is mounted or not. The value is set to true when the component is mounted and false when it is unmounted.
        </div>
      ) : null}

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={onClickCallback} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          Update State
        </button>
      </div>
    </div>
  )
}

export default UseMountedTestBed
