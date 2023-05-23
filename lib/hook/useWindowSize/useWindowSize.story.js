import {hookTestBedControl} from '../../../.storybook/component'
import UseWindowSizeTestBed from './useWindowSize.testbed'
import UseWindowSizeTestBedJSX from './useWindowSize.testbed?raw'

/**
 * The `useWindowSize` is a custom React Hook designed to track the window dimensions. The hook takes a **callback** as
 * an optional argument that is executed on the resize event. The callback function receives current window dimensions
 * as an argument. The hook **returns** an object containing the current window's width and height.
 *
 * ```jsx
 * const windowSize = useWindowSize(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} [callback=null]  the resize event callback.
 * @return {{width : number, height : number}}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const windowSize = useWindowSize(
 *     useCallback(
 *       function (windowSize) {
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
