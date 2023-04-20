/**
 * Run callback when callable, otherwise just return callback.
 *
 * @param {function} callback  a callback to be executed
 * @param {any} [rest]  additional arguments to be passed to the callback
 * @return {any}
 */
const runCallable = function (callback, ...rest) {
  if (typeof callback === 'function') {
    return callback(...rest)
  }
  return callback
}

export default runCallable
