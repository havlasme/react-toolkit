import { is } from 'ramda'

/**
 * Run callback, or passthrough value when not callable.
 *
 * @param {function} callback  a callback to be executed
 * @param {*} [rest]  additional arguments to be passed to the callback
 * @return {*|null}
 */
const runCallable = function (callback, ...rest) {
    if (is(Function, callback)) {
        return callback(...rest)
    }
    return callback
}

export default runCallable
