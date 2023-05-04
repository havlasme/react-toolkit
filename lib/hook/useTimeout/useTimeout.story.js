import UseTimeoutTestBed from './useTimeout.testbed'
import UseTimeoutTestBedJSX from './useTimeout.testbed?raw'

/**
 * The `useTimeout` hook allows to declarative create a timeout in a component.
 * The hook takes a callback function and a delay in milliseconds as parameters, and returns a function that can cancel the timeout.
 * The callback function passed to `useTimeout` must be stable.
 *
 * ```jsdoc
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule timeout when `null`
 * @return {function}
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   useTimeout(useCallback(
 *     function () {
 *       console.log('timeout expired!')
 *     }, []), 3000)
 *
 *   return null
 * }
 * ```
 */
export default {
  title: 'Timing/useTimeout',
  component: UseTimeoutTestBed,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      name: 'delay',
      type: {name: 'number', required: false},
      description: 'the delay (in ms). do not schedule timeout when `null`',
    },
  },
  parameters: {
    docs: {
      source: {
        code: UseTimeoutTestBedJSX,
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