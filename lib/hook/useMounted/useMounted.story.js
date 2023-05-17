import {hookTestBedControl} from '../../../.storybook/component'
import UseMountedTestBed from './useMounted.testbed'
import UseMountedTestBedJSX from './useMounted.testbed?raw'

/**
 * The `useMounted` is a custom React Hook that provides a way to check if a component is mounted.
 * The hook takes an optional callback function as an argument that will be executed when the component is mounted.
 * The hook returns a boolean value indicating the component's mount state.
 *
 * ```jsx
 * const mounted = useMounted(callback)
 * ```
 *
 * ```jsdoc
 * @param {function} [callback]  a callback executed when the component is mounted.
 * @return {boolean}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const mounted = useMounted(
 *     useCallback(
 *       function () {
 *         console.log('component mounted')
 *       }, []))
 *
 *   return mounted ? (
 *     <div>
 *       This will be rendered once parent component was mounted.
 *     </div>
 *   ) : null
 * }
 * ```
 */
export default {
  title: 'Lifecycle/useMounted',
  component: UseMountedTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseMountedTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
