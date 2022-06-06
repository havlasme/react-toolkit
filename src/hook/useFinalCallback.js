import { useCallback } from 'react'

/**
 * The useFinalCallback hook.
 *
 * @param {function} callback
 * @param {*} dependency
 * @param {Object} option
 * @param {boolean} option.blurActiveElement
 * @param {boolean} option.preventDefault
 * @return {function}
 */
const useFinalCallback = function (callback, dependency = [], { blurActiveElement = false, preventDefault = false } = {}) {
    return useCallback(function (event, ...rest) {
        event?.stopPropagation()
        preventDefault && event?.preventDefault()
        blurActiveElement && document.activeElement?.blur()
        callback && callback(event, ...rest)
    }, [...dependency, preventDefault])
}

export default useFinalCallback
