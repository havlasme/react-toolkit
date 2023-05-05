const DEFAULT_OPTION_OBJECT = {
  // blur an active element
  blurActiveElement: false,
  // prevent the default action
  preventDefault: false,
}

/**
 * Stop the event propagation in DOM, and optionally blur active element, or prevent default action.
 *
 * @param {Event} event  the event object.
 * @param {Object|null} [option]  the option object.
 * @param {boolean} [option.blurActiveElement=false]  blur an active element.
 * @param {boolean} [option.preventDefault=false]  prevent the default action.
 */
const lastEventCallback = function (event, option = DEFAULT_OPTION_OBJECT) {
  const {blurActiveElement = false, preventDefault = false} = option

  event.stopPropagation()

  if (preventDefault === true) {
    event.preventDefault()
  }

  if (blurActiveElement === true) {
    document.activeElement?.blur()
  }
}

export default lastEventCallback
