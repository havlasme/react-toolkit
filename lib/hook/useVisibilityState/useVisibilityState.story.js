import {hookTestBedControl} from '../../../.storybook/component'
import UseVisibilityStateTestBed from './useVisibilityState.testbed'
import UseVisibilityStateTestBedJSX from './useVisibilityState.testbed?raw'

/**
 * The `useVisibilityState` is a custom React Hook that provides the visibility state to a React component. The hook
 * takes a **callback** as an optional argument that is executed on the visibilitychange event. The callback function
 * receives current visibility state as an argument. The hook **returns** a boolean value that indicates current
 * visibility state, `true` for visible and `false` for hidden.
 *
 * ```jsx
 * const visibilityState = useVisibilityState(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} [callback=null]  the visibilitychange event callback.
 * @return {boolean}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   useVisibilityState(
 *     useCallback(
 *       function (visibilityState) {
 *         document.title = visibilityState ? 'Welcome' : 'Come back to us!'
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
