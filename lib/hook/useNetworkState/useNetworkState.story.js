import {hookTestBedControl} from '../../../.storybook/component'
import UseNetworkStateTestBed from './useNetworkState.testbed'
import UseNetworkStateTestBedJSX from './useNetworkState.testbed?raw'

/**
 * The `useNetworkState` is a custom React Hook that provides the current network state to a React component.
 * The hook returns a boolean value indicating whether the network connection is available or not.
 *
 * ```jsx
 * const networkState = useNetworkState()
 * ```
 *
 * ```jsdoc
 * @return {boolean}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const networkState = useNetworkState()
 *
 *   return !networkState ? (
 *     <div>
 *       Network connection is unavailable!
 *     </div>
 *   ) : null
 * }
 * ```
 */
export default {
  title: 'Hook/useNetworkState',
  component: UseNetworkStateTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseNetworkStateTestBedJSX,
      },
    },
  },
}

export const HookTestBed = {}
