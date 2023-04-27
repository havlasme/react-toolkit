import UseWindowSizeTestBed from './useWindowSize.testbed'
import UseWindowSizeTestBedJSX from './useWindowSize.testbed?raw'

/**
 * The `useWindowSize` hook takes an initial boolean value as an argument and returns a tuple with the current state value and a function to update it.
 * The update function can be called without any arguments to toggle the boolean value, or with a boolean value to set it directly to the new value.
 *
 * ```jsdoc
 * @return {{width : number, height : number}}
 * ```
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
  title: 'Sensor/useWindowSize',
  component: UseWindowSizeTestBed,
  tags: ['autodocs'],
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
