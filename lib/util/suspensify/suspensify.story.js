import SuspensifyTestBed from './suspensify.testbed'
import SuspensifyTestBedJSX from './suspensify.testbed?raw'


/**
 * The `suspensify` function is a utility function that makes any asynchronous function suspensible.
 * This means that you can use it to convert a function that uses promises into a function that can be used with the `Suspense` component.
 *
 * ```jsdoc
 * @param {Promise} promise  the promise.
 * @return {Object}
 * ```
 *
 * ```jsx
 * const Component = function ({onSubmit}) {
 *   const onSubmitCallback = useCallback(
 *     function (event) {
 *       console.log('do something on submit')
 *       return runCallable(onSubmit, event)
 *     }, [])
 *
 *   return (
 *     <form onSubmit={onSubmitCallback}>
 *       ...
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/suspensify',
  component: SuspensifyTestBed,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: SuspensifyTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {}
