import {useEffect, useState} from 'react'

const DEFAULT_OPTION_OBJECT = {
  destroyOnUnmount: true,
  stylesheet: null,
}

const getStyleSheetNode = function (location) {
  return document.querySelector(
    `link[href="${location}"]`,
  )
}

/**
 * The useStyleSheet hook.
 *
 * @param {string|null} location  the stylesheet location.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.destroyOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {Object|null} [option.stylesheet=null]  the optional attributes passed to the link element.
 * @return {string}
 */
const useStyleSheet = function (location, option = DEFAULT_OPTION_OBJECT) {
  const {destroyOnUnmount = true, stylesheet = null} = option

  // the stylesheet state ('loading', 'ready', 'error', `null`).
  // set to `null` when location is invalid.
  const [state, setState] = useState(
    function () {
      if (typeof location !== 'string') {
        return null
      }
      // set to the cached (at element dataset) state.
      // set to 'loading' when the element is not mounted, yet.
      return getStyleSheetNode(location)?.dataset?.state
        ?? 'loading'
    })

  useEffect(
    function () {
      // do nothing when `location` is unset.
      if (typeof location !== 'string') {
        setState(null)
        return void 0
      }

      let element = getStyleSheetNode(location)

      if (element === null) {
        element = document.createElement('link')
        element.dataset.state = 'loading'
        element.dataset.referenced = '1'
        // attach a callback to update dataset `state` attribute on respective event.
        const setStateAttributeOnEvent = function (event) {
          event.target.dataset.state = event.type === 'load' ? 'ready' : 'error'
        }
        element.addEventListener('load', setStateAttributeOnEvent)
        element.addEventListener('error', setStateAttributeOnEvent)

        for (const key in stylesheet) {
          element[key] = stylesheet[key]
        }
        element.rel = 'stylesheet'
        element.href = location
        document.body.appendChild(element)
      } else {
        element.dataset.referenced = +element.dataset.referenced + 1
      }

      // update the state,
      // and attach callback to keep the state in sync with dataset.
      setState(element.dataset.state)
      const setStateOnEvent = function (event) {
        setState(event.target.dataset.state)
      }
      element.addEventListener('load', setStateOnEvent)
      element.addEventListener('error', setStateOnEvent)

      return function () {
        element.dataset.referenced = +element.dataset.referenced - 1

        element.removeEventListener('load', setStateOnEvent)
        element.removeEventListener('error', setStateOnEvent)

        // dispose the element when there is no active reference,
        // and `destroyOnUnmount` is set.
        if (+element.dataset.referenced === 0 && destroyOnUnmount) {
          document.body.removeChild(element)
        }
      }
      // stylesheet object change must not re-run the effect!
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, destroyOnUnmount])

  return state
}

export default useStyleSheet
