import { is } from 'ramda'
import { useEffect, useRef } from 'react'

/**
 * The useClickOutside hook.
 *
 * @param {function} callback
 * @return {*}
 */
const useClickOutside = function (callback) {
    const element = useRef(null)

    useEffect(function () {
        const onMouseDown = function (event) {
            if (!element.current || element.current.contains(event.target)) return void 0

            is(Function, callback) && callback(event)
        }

        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('touchstart', onMouseDown)

        return function () {
            document.removeEventListener('mousedown', onMouseDown)
            document.removeEventListener('touchstart', onMouseDown)
        }
    }, [callback, element])

    return element
}

export default useClickOutside
