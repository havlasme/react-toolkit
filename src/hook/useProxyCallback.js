import { useCallback } from 'react'

/**
 * The useProxyCallback hook.
 *
 * @param {function} callback
 * @param {*} data
 * @param {*} dependency
 * @param {Object} option
 * @param {boolean} option.proxyEvent
 * @return {function}
 */
const useProxyCallback = function (callback, data, dependency = [], { proxyEvent = true } = {}) {
    return useCallback(function (event, ...rest) {
        if (proxyEvent) return callback(event, data, ...rest)
        return callback(data, ...rest)
    }, [...dependency, data, proxyEvent])
}

export default useProxyCallback
