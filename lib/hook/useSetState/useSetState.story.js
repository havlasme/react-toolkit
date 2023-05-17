import {hookTestBedControl} from '../../../.storybook/component'
import UseSetStateTestBed from './useSetState.testbed'
import UseSetStateTestBedJSX from './useSetState.testbed?raw'

/**
 * The `useSetState` is a custom React Hook that provides a state object and a function to update it.
 * The hook takes an initialState as argument and returns a tuple with current state object and a function to update it.
 * The update function can take a partial object, meaning we can update only part of the state object leaving the rest unchanged.
 *
 * ```jsx
 * const [state, setState] = useSetState(initialState)
 * ```
 *
 * ```jsdoc
 * @param {Object} [initialState]  the initial state.
 * @return {[Object, function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useState({'field1': '', 'field2': '', 'field3': ''})
 *
 *   const onChangeCallback = useCallback(
 *     function (event) {
 *       setState({[event.target.name]: event.target.value})
 *     }, [setState])
 *
 *   return (
 *     <input name="field1" value={state.field1} onChange={onChangeCallback}/>
 *     <input name="field2" value={state.field2} onChange={onChangeCallback}/>
 *     <input name="field3" value={state.field3} onChange={onChangeCallback}/>
 *   )
 * }
 * ```
 */
export default {
  title: 'State/useSetState',
  component: UseSetStateTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseSetStateTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
