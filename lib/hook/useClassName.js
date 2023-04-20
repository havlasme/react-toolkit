import { equals, isNil } from 'ramda'
import { useLayoutEffect } from 'react'

/**
 * The useClassName hook.
 *
 * @param {string} className
 */
const useClassName = function (className) {
    useLayoutEffect(function () {
        if (isNil(className)) return void 0

        useClassName.cache.push(className)
        document.body.classList.add(className)

        return function () {
            useClassName.cache.splice(useClassName.cache.findIndex(equals(className)), 1)
            !useClassName.cache.includes(className) && document.body.classList.remove(className)
        }
    }, [className])
}

useClassName.cache = []

export default useClassName
