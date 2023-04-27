import UseNetworkStateTestBed from './useNetworkState.testbed'
import UseNetworkStateTestBedJSX from './useNetworkState.testbed?raw'

/**
 * The `useNetworkState` hook enables the monitoring of network connectivity by providing a boolean value that reflects the online/offline status of the user's device.
 *
 * ```jsdoc
 * @return {boolean}
 * ```
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
  title: 'Sensor/useNetworkState',
  component: UseNetworkStateTestBed,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: UseNetworkStateTestBedJSX,
      },
    },
  },
}

export const HookTestBed = {}
