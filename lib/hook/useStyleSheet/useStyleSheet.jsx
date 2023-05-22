import {useCallback} from 'react'
import useExternal from '../useExternal'

const DEFAULT_OPTION_OBJECT = {
  stylesheet: null,
  removeOnUnmount: true,
  usesSuspense: false,
}

/**
 * The useStyleSheet hook.
 *
 * @param {string|null} location  the stylesheet location.
 * @param {Object} [option]  the option object.
 * @param {Object|null} [option.attributes=null]  the optional attributes passed to the link element.
 * @param {boolean} [option.removeOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {boolean} [option.usesSuspense=false]  suspend the component until the external resource is loaded.
 * @return {string|null}
 */
const useStyleSheet = function (location, option = DEFAULT_OPTION_OBJECT) {
  const {attributes = null, removeOnUnmount = true, usesSuspense = false} = option

  return useExternal(
    useCallback(
      function () {
        if (typeof location !== 'string') {
          return null
        }

        // try to find an existing dom node.
        let domNode = document.querySelector(`link[href="${location}"][rel="stylesheet"]`)
        // create a new dom node if not found.
        if (domNode === null) {
          domNode = document.createElement('link')
          for (const attributeName in attributes) {
            domNode[attributeName] = attributes[attributeName]
          }
          domNode.rel = 'stylesheet'
          domNode.href = location
        }
        return domNode
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location]), {removeOnUnmount, usesSuspense})
}

export default useStyleSheet
