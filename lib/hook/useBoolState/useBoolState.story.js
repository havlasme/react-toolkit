import {hookTestBedControl} from '../../../.storybook/component'
import UseBoolStateTestBed from './useBoolState.testbed'
import UseBoolStateTestBedJSX from './useBoolState.testbed?raw'

/**
 * The `useBoolState` is a custom React Hook that provides a boolean state variable and a function to update it. The
 * hook takes an **initialState** boolean value as an argument and **returns** a tuple with the current value and a
 * function to update it. The update function accepts an optional boolean value to update the state. Calling the update
 * function without an argument (or with non-boolean argument) will toggle the state.
 *
 * ```jsx
 * const [state, setState] = useBoolState(initialState)
 * ```
 *
 * ```jsdoc
 * @param {boolean} initialState  the initial state.
 * @return {[boolean, function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useBoolState(true)
 *
 *   return (
 *     <div>
 *       <h2 onClick={setState}>
 *         Collapse / Expand on heading click event
 *       </h2>
 *
 *       {open ? (
 *         <div>
 *           ...
 *         </div>
 *       ) : null}
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useBoolState',
  component: UseBoolStateTestBed,
  tags: ['autodocs'],
  argTypes: {
    initialState: {
      name: 'initialState',
      type: {name: 'boolean'},
      description: 'the initial state.',
    },
  },
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseBoolStateTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    initialState: true,
  },
}
