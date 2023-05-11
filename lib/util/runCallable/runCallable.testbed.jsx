import runCallable from './runCallable'

const RunCallableTestBed = function () {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div>
          <code className="block mb-2 text-sm">
            runCallable((...argument) => argument.join(' '), 'callable', 'with', 'arguments')
          </code>

          {runCallable((...argument) => argument.join(' '), 'callable', 'with', 'arguments')}
        </div>

        <div>
          <code className="block mb-2 text-sm">
            runCallable('not a callable')
          </code>

          {runCallable('not a callable')}
        </div>
      </div>
    </div>
  )
}

export default RunCallableTestBed
