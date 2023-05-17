import {hookTestBedControl} from '../../../.storybook/component'
import UseTimeoutTestBed from './useTimeout.testbed'
import UseTimeoutTestBedJSX from './useTimeout.testbed?raw'

/**
 * The `useTimeout` is a custom React Hook that provides a declarative way to schedule a timeout in React component.
 * The hook takes a callback function and a delay in milliseconds as parameters, and returns a function that can cancel the timeout.
 * The callback function passed to `useTimeout` must be stable.
 *
 * ```jsx
 * const cancelTimeout = useTimeout(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} callback  the callback.
 * @param {int|null} [delay=null]  the delay (in ms). do not schedule timeout when `null`
 * @return {function}
 * ```
 *
 * ### Example
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
  title: 'Hook/useTimeout',
  component: UseTimeoutTestBed,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      name: 'delay',
      type: {name: 'number', required: false},
      description: 'the delay (in ms). do not schedule timeout when `null`',
    },
  },
  decorators: [
    hookTestBedControl,
  ],
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
    delay: 5000,
  },
}
