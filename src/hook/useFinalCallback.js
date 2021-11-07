import { useCallback } from 'react'

/**
 * The useFinalCallback hook.
 *
 * @param {function} callback
 * @param {*} dependency
 * @param {Object} option
 * @param {boolean} option.preventDefault
 * @return {function}
 */
const useFinalCallback = function (callback, dependency = [], { preventDefault = false } = {}) {
    return useCallback(function (event, ...rest) {
        event?.stopPropagation()
        preventDefault && event?.preventDefault()
        callback && callback(event, ...rest)
    }, [...dependency, preventDefault])
}

export default useFinalCallback
