import { useEffect, useMemo } from 'react'

/**
 * The useMountPoint hook.
 *
 * @param {function} createDomNode
 * @return {*}
 */
const useMountPoint = function (createDomNode) {
    // the dom node
    const domNode = useMemo(function () {
        return createDomNode()
    }, [createDomNode])

    useEffect(function () {
        document.body.appendChild(domNode)

        return function () {
            if (!document.body.contains(domNode)) {
                return void 0
            }
            document.body.removeChild(domNode)
        }
    }, [domNode])

    return domNode
}

export default useMountPoint
