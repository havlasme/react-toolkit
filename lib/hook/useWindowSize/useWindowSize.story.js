import {hookTestBedControl} from '../../../.storybook/component'
import UseWindowSizeTestBed from './useWindowSize.testbed'
import UseWindowSizeTestBedJSX from './useWindowSize.testbed?raw'

/**
 * The `useWindowSize` is a custom React Hook designed to track the window dimensions.
 * The hook returns an object containing the current window's width and height.
 *
 * ```jsx
 * const windowSize = useWindowSize()
 * ```
 *
 * ```jsdoc
 * @return {{width : number, height : number}}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const windowSize = useWindowSize()
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
 * The TestBed
 */
export const HookTestBed = {}
