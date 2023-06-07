import {hookTestBedControl} from '../../../.storybook/component'
import UseIntervalTestBed from './useInterval.testbed'
import UseIntervalTestBedJSX from './useInterval.testbed?raw'

/**
 * The `useInterval` is a custom React Hook that provides a declarative way to schedule an interval in a React
 * component. The hook takes a **callback** function and a **interval** in milliseconds as arguments, and **returns**
 * a function that can cancel the interval. The callback function passed to `useInterval` must be stable.
 *
 * ```jsx
 * const cancelInterval = useInterval(callback, interval)
 * ```
 *
 * ```jsdoc
 * @param {function} callback  the callback.
 * @param {int|null} [interval=null]  the interval (in ms). do not schedule interval when `null`
 * @return {function}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const cancelInterval = useInterval(useCallback(
 *     function () {
 *       console.log('interval expired!')
 *     }, []), 3000)
 *
 *   return (
 *     <button type="button" onClick={cancelInterval}>
 *       Cancel Interval
 *     </button>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useInterval',
  component: UseIntervalTestBed,
  tags: ['autodocs'],
  argTypes: {
    interval: {
      name: 'interval',
      type: {name: 'number'},
      description: 'the interval (in ms). do not schedule interval when `null`',
    },
  },
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseIntervalTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    interval: 3000,
  },
}
