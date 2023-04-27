import UseBoolStateTestBed from './useBoolState.testbed'
import UseBoolStateTestBedJSX from './useBoolState.testbed?raw'

/**
 * The `useBoolState` hook takes an initial boolean value as an argument and returns a tuple with the current state value and a function to update it.
 * The update function can be called without an argument to toggle the boolean value, or with a boolean value to set it directly to the new value.
 * The hook ignores any non-boolean value passed to the update function and treats it as a toggle command.
 *
 * ```jsdoc
 * @param {boolean} initialState  the initial state.
 * @return {[boolean, function]}
 * ```
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
  title: 'State/useBoolState',
  component: UseBoolStateTestBed,
  tags: ['autodocs'],
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
export const HookTestBed = {}
