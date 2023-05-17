import {hookTestBedControl} from '../../../.storybook/component'
import UseIntervalTestBed from './useInterval.testbed'
import UseIntervalTestBedJSX from './useInterval.testbed?raw'

/**
 * The `useInterval` is a custom React Hook that provides a declarative way to schedule an interval in a React component.
 * The hook takes a callback function and a delay in milliseconds as arguments, and returns a function that can cancel the interval.
 * The callback function passed to `useInterval` must be stable.
 *
 * ```jsx
 * const cancelInterval = useInterval(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule interval when `null`
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
    delay: {
      name: 'delay',
      type: {name: 'number'},
      description: 'the delay (in ms). do not schedule interval when `null`',
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
    delay: 3000,
  },
}
