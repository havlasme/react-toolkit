/**
 * Run callback when callable, otherwise just return callback.
 *
 * @param {function} callable  a callable to be executed.
 * @param {any} [argument]  additional arguments to be passed to the callback.
 * @return {any}
 */
const runCallable = function (callable, ...argument) {
  if (typeof callable === 'function') {
    return callable(...argument)
  }
  return callable
}

export default runCallable
