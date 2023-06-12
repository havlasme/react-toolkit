import {useCallback, useSyncExternalStore} from 'react'

/**
 * The useFullScreen hook.
 *
 * @param {React.RefObject} domNodeRef  the dom node ref.
 * @return {[boolean,function,function]}
 */
const useFullScreen = function (domNodeRef) {
  if (typeof domNodeRef !== 'object' || domNodeRef === null) {
    throw new TypeError('domNodeRef must be a React.RefObject.')
  }

  // the fullscreen state. `true` when `domNode` is fullscreen.
  const state = useSyncExternalStore(
    useCallback(
      function (callback) {
        document.addEventListener('fullscreenchange', callback)
        document.addEventListener('fullscreenerror', callback)

        return function () {
          document.removeEventListener('fullscreenchange', callback)
          document.removeEventListener('fullscreenerror', callback)
        }
      }, []),
    useCallback(
      function () {
        return domNodeRef.current === document.fullscreenElement
      }, [domNodeRef]))

  // the request callback.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
  const requestFullScreen = useCallback(
    function () {
      domNodeRef.current?.requestFullscreen()
    }, [domNodeRef])

  // the exit callback.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
  const exitFullScreen = useCallback(
    function () {
      if (domNodeRef.current === document?.fullscreenElement) {
        document?.exitFullscreen()
      }
    }, [domNodeRef])

  return [state, requestFullScreen, exitFullScreen]
}

export default useFullScreen
