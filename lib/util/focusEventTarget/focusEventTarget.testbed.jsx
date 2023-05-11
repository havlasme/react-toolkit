import focusEventTarget from './focusEventTarget'

const FocusEventTargetTestBed = function () {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-2">
            TextField
          </span>

          <input onBlur={focusEventTarget} className="py-1 px-2 border"/>
        </label>
      </div>
    </div>
  )
}

export default FocusEventTargetTestBed
