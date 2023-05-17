import {hookTestBedControl} from '../../../.storybook/component'
import UseFullScreenTitleTestBed from './useFullScreen.testbed'
import UseFullScreenTitleTestBedJSX from './useFullScreen.testbed?raw'

/**
 * The `useFullScreen` is a custom React Hook the allows to display an element in full screen mode.
 * This hook returns an array - an element ref, a boolean state, a function to request full screen mode, and a function to exit full screen mode.
 *
 * ```jsx
 * const [element, state, requestFullScreen, exitFullScreen] = useFullScreen()
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
 *   const [element, state, requestFullScreen, exitFullScreen] = useFullScreen()
 *
 *   return (
 *     <div>
 *       <video ref={element}>
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
  title: 'UI/useFullScreen',
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
