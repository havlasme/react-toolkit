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
 */
const useNetworkState = function () {
  return useSyncExternalStore(subscribe, getSnapshot)
}

export default useNetworkState
