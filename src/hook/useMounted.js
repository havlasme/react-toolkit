import { useEffect, useState } from 'react'

/**
 * The useMounted hook.
 *
 * @return {boolean}
 */
const useMounted = function () {
    const [mounted, set] = useState(false)

    useEffect(function () {
        set(true)
    }, [])

    return mounted
}

export default useMounted
