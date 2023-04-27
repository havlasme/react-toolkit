import {useLayoutEffect, useRef} from 'react'

const DEFAULT_OPTION_OBJECT = {
  restoreOnUnmount: true,
}

/**
 * The useTitle hook.
 *
 * @param {string} title  the title.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.restoreOnUnmount=true]  restore previous title on unmount.
 */
const useDocumentTitle = function (title, {restoreOnUnmount} = DEFAULT_OPTION_OBJECT) {
  if (typeof title !== 'string' && title !== null) {
    throw new TypeError('title must be a string|null.')
  }

  const prevTitle = useRef(document.title)

  useLayoutEffect(function () {
    if (typeof title === 'string') {
      document.title = title
    }
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
