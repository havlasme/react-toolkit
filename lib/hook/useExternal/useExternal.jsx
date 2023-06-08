import {useInsertionEffect, useLayoutEffect, useMemo, useState} from 'react'

const DEFAULT_OPTION_OBJECT = {
  removeOnUnmount: true,
  usesSuspense: false,
}

/**
 * The useExternal hook.
 *
 * @param {function} createDomNode  the function to create the dom node.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.removeOnUnmount=true]  remove the element from dom on unmount. (must not have any active reference).
 * @param {boolean} [option.usesSuspense=false]  suspend the component until the external resource is loaded.
 * @return {string|null}
 */
const useExternal = function (createDomNode, {removeOnUnmount = true, usesSuspense = false} = DEFAULT_OPTION_OBJECT) {
  if (typeof createDomNode !== 'function') {
    throw new TypeError('createDomNode must be a function.')
  }

  // create a dom node.
  const domNode = useMemo(
    function () {
      const domNode = createDomNode()
      if (domNode !== null) {
        domNode.dataset.state ??= 'loading'
        domNode.dataset.references ??= '0'
        // update dataset `state` attribute on respective event.
        const setStateAttributeOnEvent = function (event) {
          domNode.dataset.state = event.type === 'load' ? 'ready' : 'error'
        }
        domNode.addEventListener('load', setStateAttributeOnEvent)
        domNode.addEventListener('error', setStateAttributeOnEvent)
      }
      return domNode
    }, [createDomNode])

  // the dom node state ('loading', 'ready', 'error', `null`).
  const [state, setState] = useState(
    function () {
      if (domNode === null) {
        return null
      }
      return domNode.dataset.state
    })

  // throw a promise if the external resource is loading.
  if (usesSuspense && state === 'loading') {
    throw new Promise(
      function (resolve, reject) {
        const onEvent = function (event) {
          domNode.removeEventListener('load', onEvent)
          domNode.removeEventListener('error', onEvent)

          if (event.type === 'load') {
            resolve(domNode)
            return void 0
          }
          reject(domNode)
        }
        domNode.addEventListener('load', onEvent)
        domNode.addEventListener('error', onEvent)

        if (!domNode.isConnected) {
          document.head.appendChild(domNode)
        }
      })
  }
  // throw an error if the external resource failed to load.
  if (usesSuspense && state === 'error') {
    throw new Error('Failed to load an external resource.')
  }

  // update the dom node state.
  useLayoutEffect(
    function () {
      if (domNode === null) {
        setState(null)
        return void 0
      }
      setState(domNode.dataset.state)
    }, [domNode])

  // insert the dom node into the document head.
  useInsertionEffect(
    function () {
      if (domNode === null) {
        return void 0
      }

      domNode.dataset.references = +domNode.dataset.references + 1
      // subscribe to the state update event.
      const setStateOnEvent = function () {
        setState(domNode.dataset.state)
      }
      domNode.addEventListener('load', setStateOnEvent)
      domNode.addEventListener('error', setStateOnEvent)

      if (!domNode.isConnected) {
        document.head.appendChild(domNode)
      }

      return function () {
        domNode.dataset.references = +domNode.dataset.references - 1
        // unsubscribe from the state update event.
        domNode.removeEventListener('load', setStateOnEvent)
        domNode.removeEventListener('error', setStateOnEvent)

        if (removeOnUnmount && +domNode.dataset.references === 0) {
          document.head.removeChild(domNode)
        }
      }
    }, [domNode])

  return state
}

export default useExternal
