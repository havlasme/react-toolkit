import useFullScreen from './useFullScreen'

const UseFullScreenTestBed = function () {
  const [element, state, requestFullScreen, exitFullScreen] = useFullScreen()

  return (
    <div ref={element} className={state ? 'space-y-4 py-3 px-4 bg-white' : 'space-y-4'}>
      <div>
        current state: <strong>{String(state)}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={state ? exitFullScreen : requestFullScreen} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          {state ? 'Exit FullScreen' : 'Request FullScreen'}
        </button>
      </div>
    </div>
  )
}

export default UseFullScreenTestBed
