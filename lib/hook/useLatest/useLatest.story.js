import UseLatestTestBed from './useLatest.testbed'
import UseLatestTestBedJSX from './useLatest.testbed?raw'

/**
 * The `useLatest` hook keeps track of the latest value passed as its first argument.
 * This hook is useful in when working with asynchronous callbacks, and you want to ensure that it always have access to the most up-to-date value.
 *
 * ```jsdoc
 * @param {any} value  the value.
 * @return {{current: any}}
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useState('')
 *   const stateLatest = useLatest(state)
 *
 *   const onChangeCallback = useCallback(
 *     function (event) {
 *       setState(event.target.value)
 *     }, [setState])
 *
 *   const onSubmitCallback = useCallback(
 *     function () {
 *       console.log(stateLatest.current)
 *     }, [stateLatest])
 *
 *   return (
 *     <form onSubmit={onSubmitCallback}>
 *       <input value={state} onChange={onChangeCallback}/>
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'State/useLatest',
  component: UseLatestTestBed,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: UseLatestTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
