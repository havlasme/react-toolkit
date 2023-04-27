import focusEventTarget from './focusEventTarget'

const FocusEventTargetTestBed = function () {
  return (
    <div className="space-y-4">
      <label className="block">
        <span className="block mb-2">
          TextField
        </span>

        <input onBlur={focusEventTarget} className="py-1 px-2 w-full border"/>
      </label>
    </div>
  )
}

export default FocusEventTargetTestBed
