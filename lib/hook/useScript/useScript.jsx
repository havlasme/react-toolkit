import {useCallback} from 'react'
import useExternal from '../useExternal'

const DEFAULT_OPTION_OBJECT = {
  domNodeAttributes: null,
  removeOnUnmount: true,
  usesSuspense: false,
}

/**
 * The useScript hook.
 *
 * @param {string|null} location  the script location.
 * @param {Object} [option]  the option object.
 * @param {Object|null} [option.attributes=null]  the optional attributes passed to the script element.
 * @param {boolean} [option.removeOnUnmount=true]  remove the element from dom on unmount. (must not have any active reference).
 * @param {boolean} [option.usesSuspense=false]  suspend the component until the external resource is loaded.
 * @return {string}
 */
const useScript = function (location, option = DEFAULT_OPTION_OBJECT) {
  const {attributes = null, removeOnUnmount = true, usesSuspense = false} = option

  return useExternal(
    useCallback(
      function () {
        if (typeof location !== 'string') {
          return null
        }

        // try to find an existing dom node.
        let domNode = document.querySelector(`script[src="${location}"]`)
        // create a new dom node if not found.
        if (domNode === null) {
          domNode = document.createElement('script')
          for (const attributeName in attributes) {
            domNode[attributeName] = attributes[attributeName]
          }
          domNode.src = location
        }
        return domNode
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location]), {removeOnUnmount, usesSuspense})
}

export default useScript
