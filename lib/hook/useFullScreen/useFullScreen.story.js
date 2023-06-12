import {hookTestBedControl} from '../../../.storybook/component'
import UseFullScreenTitleTestBed from './useFullScreen.testbed'
import UseFullScreenTitleTestBedJSX from './useFullScreen.testbed?raw'

/**
 * The `useFullScreen` is a custom React Hook the allows to display an element in fullscreen mode. The hook takes a
 * **domNodeRef** as an argument. The hook **returns** a tuple with a boolean state, a function to request fullscreen
 * mode, and a function to exit fullscreen mode.
 *
 * ```jsx
 * const [state, requestFullScreen, exitFullScreen] = useFullScreen(domNodeRef)
 * ```
 *
 * ```jsdoc
 * @param {React.RefObject} domNodeRef  the dom node ref.
 * @return {[boolean,function,function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const domNodeRef = useRef(null)
 *   const [state, requestFullScreen, exitFullScreen] = useFullScreen(domNodeRef)
 *
 *   return (
 *     <div>
 *       <video ref={domNodeRef}>
 *         ...
 *       </video>
 *
 *       <button type="button" onClick={state ? exitFullScreen : requestFullScreen}>
 *         {state ? 'Exit FullScreen' : 'Request FullScreen'}
 *       </button>
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useFullScreen',
  component: UseFullScreenTitleTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseFullScreenTitleTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
