import useFullScreen from './useFullScreen'

const UseFullScreenTestBed = function () {
  const [element, state, requestFullScreen, exitFullScreen] = useFullScreen()
  const className = state ? 'space-y-4 py-3 px-4 bg-white' : 'space-y-4'

  return (
    <div ref={element} className={className}>
      <div className="space-y-2">
        current state: <strong>{String(state)}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={state ? exitFullScreen : requestFullScreen} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          {state ? 'Exit fullscreen' : 'Request fullscreen'}
        </button>
      </div>
    </div>
  )
}

export default UseFullScreenTestBed
