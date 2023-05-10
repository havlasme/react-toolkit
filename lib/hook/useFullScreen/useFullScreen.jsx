import {useCallback, useEffect, useRef} from 'react'
import useBoolState from '../useBoolState'

/**
 * The useFullScreen hook.
 *
 * @return {[Object,boolean,function,function]}
 */
const useFullScreen = function () {
  // the element ref.
  // an element to be displayed in fullscreen mode.
  const element = useRef(null)
  // the fullscreen state.
  const [state, setState] = useBoolState(false)

  // the request callback.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
  const requestFullScreen = useCallback(
    function () {
      element.current?.requestFullscreen()
    }, [])

  // the exit callback.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
  const exitFullScreen = useCallback(
    function () {
      if (element.current === document?.fullscreenElement) {
        document?.exitFullscreen()
      }
    }, [])

  useEffect(
    function () {
      const setStateOnEvent = function () {
        setState(element.current === document.fullscreenElement)
      }
      document.addEventListener('fullscreenchange', setStateOnEvent)
      document.addEventListener('fullscreenerror', setStateOnEvent)

      return function () {
        document.removeEventListener('fullscreenchange', setStateOnEvent)
        document.removeEventListener('fullscreenerror', setStateOnEvent)
      }
    }, [])

  return [element, state, requestFullScreen, exitFullScreen]
}

export default useFullScreen
