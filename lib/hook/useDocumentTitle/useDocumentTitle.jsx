import {useLayoutEffect, useRef} from 'react'

const DEFAULT_OPTION_OBJECT = {
  restoreOnUnmount: true,
}

/**
 * The useDocumentTitle hook.
 *
 * @param {string|null} title  the title.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.restoreOnUnmount=true]  restore previous title on unmount.
 */
const useDocumentTitle = function (title, option = DEFAULT_OPTION_OBJECT) {
  if (typeof title !== 'string' && title !== null) {
    throw new TypeError('title must be a string|null.')
  }
  // destruct the option object.
  const {restoreOnUnmount = true} = option
  // the previous title ref. to be restored on unmount.
  const prevTitle = useRef(document.title)

  // update the document title.
  useLayoutEffect(
    function () {
      if (typeof title === 'string') {
        document.title = title
      }
    }, [title])

  // restore the previous title on unmount.
  useLayoutEffect(
    function () {
      if (restoreOnUnmount === true) {
        return function () {
          document.title = prevTitle.current
        }
      }
    }, [])
}

export default useDocumentTitle
