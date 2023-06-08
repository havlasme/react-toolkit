import {useInsertionEffect, useMemo} from 'react'

/**
 * The useDomNode hook.
 *
 * @param {function} createDomNode  the callback that creates dom node.
 * @return {any}
 */
const useDomNode = function (createDomNode) {
  // the dom node.
  const domNode = useMemo(
    function () {
      return createDomNode()
    }, [createDomNode])

  // insert the dom node to the document.
  useInsertionEffect(
    function () {
      document.body.appendChild(domNode)

      return function () {
        if (document.body.contains(domNode)) {
          document.body.removeChild(domNode)
        }
      }
    }, [domNode])

  return domNode
}

export default useDomNode
