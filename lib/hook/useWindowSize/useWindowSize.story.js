import {hookTestBedControl} from '../../../.storybook/component'
import UseWindowSizeTestBed from './useWindowSize.testbed'
import UseWindowSizeTestBedJSX from './useWindowSize.testbed?raw'

/**
 * The `useWindowSize` is a custom React Hook designed to track the window dimensions. The hook takes an optional
 * **callback** as an argument that is executed on the `resize`|`orientationchange` event. The callback function
 * receives the event and current window dimensions as an argument. The hook **returns** an object containing the
 * current window's width and height.
 *
 * The hook is intended to be client-side only and thus should be used within `Suspense` when server-side rendering.
 *
 * ```jsx
 * const windowSize = useWindowSize(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} [callback=null]  the event callback.
 * @return {{height: number, width: number}}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const windowSize = useWindowSize(
 *     useCallback(
 *       function (event, windowSize) {
 *         console.log(windowSize)
 *       }, []))
 *
 *   return windowSize.width < 768 ? (
 *     <div>
 *       Visible only on small screen.
 *     </div>
 *   ) : null
 * }
 * ```
 */
export default {
  title: 'Hook/useWindowSize',
  component: UseWindowSizeTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseWindowSizeTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
