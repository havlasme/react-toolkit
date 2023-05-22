import {useCallback, useEffect, useRef} from 'react'
import useBoolState from '../useBoolState'

/**
 * The useFullScreen hook.
 *
 * @return {[Object,boolean,function,function]}
 */
const useFullScreen = function () {
  // the dom node ref.
  const domNodeRef = useRef(null)
  // the fullscreen state. `true` when `domNode` is fullscreen.
  const [state, setState] = useBoolState(false)

  // the request callback.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
  const requestFullScreen = useCallback(
    function () {
      domNodeRef.current?.requestFullscreen()
    }, [])

  // the exit callback.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
  const exitFullScreen = useCallback(
    function () {
      if (domNodeRef.current === document?.fullscreenElement) {
        document?.exitFullscreen()
      }
    }, [])

  useEffect(
    function () {
      const setStateOnEvent = function () {
        setState(domNodeRef.current === document.fullscreenElement)
      }
      document.addEventListener('fullscreenchange', setStateOnEvent)
      document.addEventListener('fullscreenerror', setStateOnEvent)

      return function () {
        document.removeEventListener('fullscreenchange', setStateOnEvent)
        document.removeEventListener('fullscreenerror', setStateOnEvent)
      }
    }, [])

  return [domNodeRef, state, requestFullScreen, exitFullScreen]
}

export default useFullScreen
