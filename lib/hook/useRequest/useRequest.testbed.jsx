import {useMemo} from 'react'
import useRequest from './useRequest'

const UseRequestTestBed = function ({request, delay}) {
  const [state, dispatch] = useRequest(
    useMemo(
      function () {
        return function () {
          return fetch(request)
            .then(
              function (response) {
                return response.json()
              })
            .then(function (response) {
              return new Promise(
                function (resolve) {
                  setTimeout(
                    function () {
                      resolve(response)
                    }, delay)
                },
              )
            })
        }
      }, [request, delay]))

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={dispatch} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Dispatch request
        </button>
      </div>
    </div>
  )
}

export default UseRequestTestBed
