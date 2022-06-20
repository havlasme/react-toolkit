import { useEffect, useState } from 'react'
import runEventCallback from '../util/runEventCallback'

/**
 * The useMounted hook.
 *
 * @param {function} [callback=null]  a callback executed when the component is mounted
 * @return {boolean}
 */
const useMounted = function (callback = null) {
    const [mounted, set] = useState(false)

    useEffect(function () {
        set(true)
        // run the callback
        return runEventCallback(callback)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return mounted
}

export default useMounted
