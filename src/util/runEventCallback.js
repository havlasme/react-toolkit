/**
 * Run the event callback, if the provided argument is instance of function.
 *
 * @param {*} callback
 * @param {*} rest
 * @return {*}
 * @deprecated
 * @see runCallable
 */
const runEventCallback = function (callback, ...rest) {
    if (callback instanceof Function) {
        return callback(...rest)
    }
}

export default runEventCallback
