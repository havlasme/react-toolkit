import {useLayoutEffect, useRef} from 'react'

const DEFAULT_OPT_OBJECT = {
  restoreOnUnmount: true,
}

/**
 * The useTitle hook.
 *
 * @param {string} title  the title.
 * @param {Object} [opt]  the opt object.
 * @param {boolean} [opt.restoreOnUnmount=true]  restore previous title on unmount.
 * @example
 *
 * const Component = function () {
 *   useTitle('document title')
 *   // the document title should be set to `document title`
 *
 *   return null
 * }
 */
const useDocumentTitle = function (title, {restoreOnUnmount} = DEFAULT_OPT_OBJECT) {
  const prevTitle = useRef(document.title)

  useLayoutEffect(function () {
    document.title = title
  }, [title])

  useLayoutEffect(function () {
    if (restoreOnUnmount === true) {
      return function () {
        document.title = prevTitle.current
      }
    }
  }, [])
}

export default useDocumentTitle
