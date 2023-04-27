import UseMountedTestBed from './useMounted.testbed'
import UseMountedTestBedJSX from './useMounted.testbed?raw'

/**
 * The `useMounted` hook returns a boolean value that indicates whether the component is mounted or not. The value is set to true when the component is mounted and false when it is unmounted.
 *
 * ```jsdoc
 * @param {function} [callback]  a callback executed when the component is mounted.
 * @return {boolean}
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   const mounted = useMounted(useCallback(
 *     function () {
 *       console.log('component mounted')
 *     }, []))
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
