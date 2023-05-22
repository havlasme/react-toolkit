import {useInsertionEffect, useMemo} from 'react'

/**
 * The useMountPoint hook.
 *
 * @param {function} createDomNode  the callback that creates dom node.
 * @return {any}
 */
const useMountPoint = function (createDomNode) {
  const domNode = useMemo(
    function () {
      return createDomNode()
    }, [createDomNode])

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

export default useMountPoint
