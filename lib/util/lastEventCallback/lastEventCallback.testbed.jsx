import {useCallback} from 'react'
import lastEventCallback from './lastEventCallback'

const LastEventCallbackTestBed = function ({blurActiveElement, preventDefault}) {
  const onSubmitCallback = useCallback(
    function (event) {
      lastEventCallback(event, {blurActiveElement, preventDefault})
    }, [blurActiveElement, preventDefault])

  return (
    <form onSubmit={onSubmitCallback} className="space-y-4">
      <div className="space-y-2">
        <label>
          <span className="block mb-1">
            TextField
          </span>

          <input type="text" className="block py-1 px-2 border"/>
        </label>
      </div>

      <div className="space-x-2">
        <button type="submit" className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Submit
        </button>
      </div>
    </form>
  )
}

export default LastEventCallbackTestBed
