import {hookTestBedControl} from '../../../.storybook/component'
import UseNetworkStateTestBed from './useNetworkState.testbed'
import UseNetworkStateTestBedJSX from './useNetworkState.testbed?raw'

/**
 * The `useNetworkState` is a custom React Hook that provides the current network state to a React component. The hook
 * takes a **callback** as an optional argument that is executed on the online/offline event. The callback function
 * receives current network state as an argument. The hook **returns** a boolean value that indicates current network
 * state, `true` for online and `false` for offline.
 *
 * ```jsx
 * const networkState = useNetworkState(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} [callback=null]  the online/offline event callback.
 * @return {boolean}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const networkState = useNetworkState(
 *     useCallback(
 *       function (networkState) {
 *         console.log('networkState', networkState)
 *       }, []))
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
