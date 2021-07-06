import { useCallback } from 'react'

/**
 * The useFinalCallback hook.
 *
 * @param {function} callback
 * @param {*} dependency
 * @return {function}
 */
const useFinalCallback = function (callback, dependency = []) {
    return useCallback(function (event, ...rest) {
        event?.preventDefault()
        event?.stopPropagation()
        callback && callback(event, ...rest)
    }, [callback, ...dependency])
}

export default useFinalCallback
