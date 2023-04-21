import {focusEventTarget, nullable, useBoolState} from '@havlasme/react-toolkit'

const FocusEventTargetTestBed = function () {
  const [disabled, toggle] = useBoolState(false)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        focusEventTarget
      </h2>

      <div className="py-3 px-4 grow">
        This function calls the focus() method on the target property of the event object.
        The target property returns the element that triggered the event.

        <input onBlur={nullable(focusEventTarget, disabled)} className="mt-4 py-1 px-2 w-full border"/>
      </div>

      <div className="flex py-2 px-2 gap-4 justify-end">
        <button type="button" onClick={toggle} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {disabled ? 'Enable' : 'Disable'}
        </button>
      </div>
    </div>
  )
}

export default FocusEventTargetTestBed
