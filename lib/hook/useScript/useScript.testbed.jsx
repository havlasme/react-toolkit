import useScript from './useScript'

const UseScriptTestBed = function ({location, removeOnUnmount, usesSuspense}) {
  const state = useScript(location, {removeOnUnmount, usesSuspense})

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state: {String(state)}<br/>
        <span id="useScript-testbed-mount">not loaded / already loaded!</span>
      </div>
    </div>
  )
}

export default UseScriptTestBed
