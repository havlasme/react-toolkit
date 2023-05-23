import {hookTestBedControl} from '../../../.storybook/component'
import UseObservableTestBed from './useObservable.testbed'
import UseObservableTestBedJSX from './useObservable.testbed?raw'

/**
 * The `useObservable` is a custom React Hook that subscribes to an observable. The hook takes an **observable$** and
 * an optional **initialState** as arguments and **returns** a tuple with the current state and a function to update it.
 *
 * ```jsx
 * const [state, dispatch] = useObservable(observable$, initialState)
 * ```
 *
 * ```jsdoc
 * @param {Object} observable$  the observable.
 * @param {any} [initialState=null]  the initial state.
 * @return {[any,function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, dispatch] = useObservable(state$, null)
 *
 *   const dispatchStateCallback = useCallback(
 *     function () {
 *       dispatch('next state')
 *     }, [dispatch])
 *
 *   return (
 *     <div>
 *       {state}
 *
 *       <button onClick={dispatchStateCallback}>
 *         Dispatch next state
 *       </button>
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useObservable',
  component: UseObservableTestBed,
  tags: ['autodocs'],
  argTypes: {
    initialState: {
      name: 'initialState',
      type: {name: 'string'},
      description: 'the initial state.',
    },
  },
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseObservableTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
