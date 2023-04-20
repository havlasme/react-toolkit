import {useSyncExternalStore} from 'react'

const getSnapshot = function () {
  return navigator.onLine
}

const subscribe = function (callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)

  return function () {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

/**
 * The useNetworkState hook.
 *
 * @return {boolean}
 * @example
 *
 * const Component = function ({ children }) {
 *   const online = useNetworkState()
 *
 *   return !online ? (
 *     <div>
 *       Network disconnected!
 *     </div>
 *   ) : null
 * }
 */
const useNetworkState = function () {
  return useSyncExternalStore(subscribe, getSnapshot)
}

export default useNetworkState
