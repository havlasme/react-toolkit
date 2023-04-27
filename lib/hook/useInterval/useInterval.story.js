import UseIntervalTestBed from './useInterval.testbed'
import UseIntervalTestBedJSX from './useInterval.testbed?raw'

/**
 * The `useInterval` hook is a declarative way to create an interval in a component.
 * The hook takes a callback function and a delay in milliseconds as parameters, and returns a function that can cancel the interval.
 * The callback function passed to `useInterval` must be stable.
 *
 * ```jsdoc
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule interval when `null`
 * @return {function}
 * ```
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
  title: 'Timing/useInterval',
  component: UseIntervalTestBed,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      name: 'delay',
      type: {name: 'number'},
      description: 'the delay (in ms). do not schedule interval when `null`',
    },
  },
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
