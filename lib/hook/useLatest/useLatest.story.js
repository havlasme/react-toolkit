import {hookTestBedControl} from '../../../.storybook/component'
import UseLatestTestBed from './useLatest.testbed'
import UseLatestTestBedJSX from './useLatest.testbed?raw'

/**
 * The `useLatest` is a custom React Hook keeps track of the latest value passed as an argument. The hook returns a ref
 * object with a `current` property set to the latest value passed to the hook.
 *
 * ```jsx
 * const stateLatest = useLatest(state)
 * ```
 *
 * ```jsdoc
 * @param {any} value  the value.
 * @return {{current: any}}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useState('')
 *   const stateLatest = useLatest(state)
 *
 *   const inputCallback = useCallback(
 *     function (event) {
 *       setState(event.target.value)
 *     }, [setState])
 *
 *   const submitCallback = useCallback(
 *     function () {
 *       console.log(stateLatest.current)
 *     }, [stateLatest])
 *
 *   return (
 *     <form onSubmit={submitCallback}>
 *       <input value={state} onChange={inputCallback}/>
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useLatest',
  component: UseLatestTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
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
