import {hookTestBedControl} from '../../../.storybook/component'
import UseFullScreenTitleTestBed from './useFullScreen.testbed'
import UseFullScreenTitleTestBedJSX from './useFullScreen.testbed?raw'

/**
 * The `useFullScreen` is a custom React Hook the allows to display an element in fullscreen mode. The hook **returns**
 * a tuple with an element ref, a boolean state, a function to request fullscreen mode, and a function to exit
 * fullscreen mode.
 *
 * ```jsx
 * const [domNodeRef, state, requestFullScreen, exitFullScreen] = useFullScreen()
 * ```
 *
 * ```jsdoc
 * @return {[Object,boolean,function,function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [elementRef, state, requestFullScreen, exitFullScreen] = useFullScreen()
 *
 *   return (
 *     <div>
 *       <video ref={elementRef}>
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
