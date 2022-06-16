import { useCallback } from 'react'
import runCallable from '../util/runCallable'

/**
 * The useProxyCallback hook.
 *
 * @param {function} callback
 * @param {*} payload
 * @param {*} dependency
 * @param {Object} option
 * @param {boolean} option.proxyEvent
 * @return {function}
 */
const useProxyCallback = function (callback, payload, dependency = [], { proxyEvent = true } = {}) {
    return useCallback(function (event, ...rest) {
        if (proxyEvent) return callback(event, runCallable(payload, event), ...rest)
        return callback(runCallable(payload, event), ...rest)
    }, [...dependency, payload, proxyEvent])
}

export default useProxyCallback
