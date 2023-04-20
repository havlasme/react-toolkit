import { useEffect, useState } from 'react'

/**
 * The useNetworkState hook.
 *
 * @return {boolean}
 * @example
 *
 * const Component = function ({ children }) {
 *   const online = useNetworkState()
 *
 *   return online ? children : (
 *     <div>
 *       ...
 *     </div>
 *   )
 * }
 */
const useNetworkState = function () {
    const [state, set] = useState(navigator.onLine)

    useEffect(function () {
        const onNetworkStateEvent = function (event) {
            set(event.type === 'online')
        }

        window.addEventListener('online', onNetworkStateEvent)
        window.addEventListener('offline', onNetworkStateEvent)

        return function () {
            window.removeEventListener('online', onNetworkStateEvent)
            window.removeEventListener('offline', onNetworkStateEvent)
        }
    }, [set])

    return state
}

export default useNetworkState
