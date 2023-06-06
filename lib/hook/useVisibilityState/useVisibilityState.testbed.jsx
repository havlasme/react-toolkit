import {useCallback, useRef} from 'react'
import useVisibilityState from './useVisibilityState'

const UseVisibilityStateTestBed = function () {
  const previousTitleRef = useRef(null)

  // NOTE: use window parent since this is in storybook.
  const visibilityState = useVisibilityState(
    useCallback(
      function (event, visibilityState) {
        if (visibilityState === 'hidden') {
          previousTitleRef.current = window.parent.document.title
          window.parent.document.title = 'Come back to us!'
        } else {
          window.parent.document.title = previousTitleRef.current
        }
      }, []))

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        current state:{' '}
        <strong>
          {String(visibilityState)}
        </strong>
        <br/>
        <em>NOTE: the window title should change to <strong>Come back to us!</strong> when the window is not visible.</em>
      </div>
    </div>
  )
}

export default UseVisibilityStateTestBed
