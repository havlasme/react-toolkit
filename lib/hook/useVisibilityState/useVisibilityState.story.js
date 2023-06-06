import {hookTestBedControl} from '../../../.storybook/component'
import UseVisibilityStateTestBed from './useVisibilityState.testbed'
import UseVisibilityStateTestBedJSX from './useVisibilityState.testbed?raw'

/**
 * The `useVisibilityState` is a custom React Hook that provides the visibility state to a React component. The hook
 * takes an optional **callback** as an argument that is executed on the `visibilitychange` event. The callback
 * function receives the event and current visibility state as an argument. The hook **returns** a value that
 * indicates current visibility state.
 *
 * ```jsx
 * const visibilityState = useVisibilityState(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} [callback=null]  the event callback.
 * @return {string}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   useVisibilityState(
 *     useCallback(
 *       function (event, visibilityState) {
 *         document.title = visibilityState === 'visible' ? 'Welcome' : 'Come back to us!'
 *       }, []))
 *
 *   return (
 *     ...
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useVisibilityState',
  component: UseVisibilityStateTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseVisibilityStateTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
