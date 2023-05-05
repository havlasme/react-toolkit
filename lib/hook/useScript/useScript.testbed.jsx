import useScript from './useScript'

const UseScriptTestBed = function ({location}) {
  const state = useScript(location)

  return (
    <div className="space-y-4">
      <div>
        current state: {String(state)}<br/>
        <small>@see console.log</small>
      </div>
    </div>
  )
}

export default UseScriptTestBed
