import { useCallback, useEffect, useState } from 'react'

/**
 * The useNetworkState hook.
 *
 * @return {boolean}
 */
const useNetworkState = function () {
    const [state, set] = useState(navigator.onLine)

    const onNetworkStateEvent = useCallback(function (event) {
        set(event.type === 'online')
    }, [set])

    useEffect(function () {
        window.addEventListener('online', onNetworkStateEvent)
        window.addEventListener('offline', onNetworkStateEvent)

        return function () {
            window.removeEventListener('online', onNetworkStateEvent)
            window.removeEventListener('offline', onNetworkStateEvent)
        }
    }, [onNetworkStateEvent])

    return state
}

export default useNetworkState
