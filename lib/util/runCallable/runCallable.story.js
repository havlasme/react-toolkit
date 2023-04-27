import RunCallableTestBed from './runCallable.testbed'
import RunCallableTestBedJSX from './runCallable.testbed?raw'

/**
 * The `runCallable` function executes given function with set of provided arguments.
 * It takes a callback function and an arbitrary number of arguments, and returns the result of executing the callback function with those arguments, or simply returns the callback function if it is not of type `function`.
 *
 * ```jsdoc
 * @param {function} callable  a callable to be executed.
 * @param {any} [argument]  additional arguments to be passed to the callback.
 * @return {any}
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
  title: 'Util/runCallable',
  component: RunCallableTestBed,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: RunCallableTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {}
