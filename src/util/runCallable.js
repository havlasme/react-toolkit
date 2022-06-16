import { is } from 'ramda'

/**
 * Run callback, or passthrough value when not callable.
 *
 * @param {function} callback
 * @param {*} rest
 * @return {*}
 */
const runCallable = function (callback, ...rest) {
    if (is(Function, callback)) return callback(...rest)
    return callback
}

export default runCallable
