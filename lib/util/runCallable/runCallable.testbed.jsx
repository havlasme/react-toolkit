import runCallable from './runCallable'

const RunCallableTestBed = function () {
  return (
    <div className="space-y-4">
      <div>
        <code className="block mb-2">
          runCallable((...argument) => argument.join(' '), 'callable', 'with', 'arguments')
        </code>

        {runCallable((...argument) => argument.join(' '), 'callable', 'with', 'arguments')}
      </div>

      <div>
        <code className="block mb-2">
          runCallable('not a callable')
        </code>

        {runCallable('not a callable')}
      </div>
    </div>
  )
}

export default RunCallableTestBed
