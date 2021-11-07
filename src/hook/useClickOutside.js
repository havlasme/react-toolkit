import { useCallback, useEffect, useRef } from 'react'

/**
 * The useClickOutside hook.
 *
 * @param {function} callback
 * @return {*}
 */
const useClickOutside = function (callback) {
    const element = useRef(null)

    const onMouseDown = useCallback(function (event) {
        if (!element.current || element.current.contains(event.target)) return void 0
        callback && callback(event)
    }, [callback, element])

    useEffect(function () {
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('touchstart', onMouseDown)

        return function () {
            document.removeEventListener('mousedown', onMouseDown)
            document.removeEventListener('touchstart', onMouseDown)
        }
    }, [onMouseDown])

    return element
}

export default useClickOutside
