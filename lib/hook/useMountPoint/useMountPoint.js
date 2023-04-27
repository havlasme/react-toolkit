import {useEffect, useMemo} from 'react'

/**
 * The useMountPoint hook.
 *
 * @param {function} createDomNode  the callback that creates dom node.
 * @return {any}
 * @example
 *
 * const Component = function () {
 *   const domNode = useMountPoint(createDomNode)
 *
 *   return createPortal((
 *     <div>
 *       This is rendered outside main application root node.
 *     </div>
 *   ), domNode)
 * }
 */
const useMountPoint = function (createDomNode) {
  const domNode = useMemo(function () {
    return createDomNode()
  }, [createDomNode])

  useEffect(function () {
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
