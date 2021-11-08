import { isNil } from 'ramda'
import { useLayoutEffect } from 'react'

/**
 * The useClassName hook.
 *
 * @param {string} className
 */
const useClassName = function (className) {
    useLayoutEffect(function () {
        if (isNil(className)) return void 0

        this.cache.push(className)
        document.body.classList.add(className)

        return (function () {
            this.cache.splice(this.cache.findIndex(className), 1)
            !this.cache.includes(className) && document.body.classList.remove(className)
        }).bind(this)
    }, [className])
}

useClassName.cache = []

export default useClassName
