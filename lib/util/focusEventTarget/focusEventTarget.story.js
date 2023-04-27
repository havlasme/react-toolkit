import FocusEventTargetTestBed from './focusEventTarget.testbed'
import FocusEventTargetTestBedJSX from './focusEventTarget.testbed?raw'

/**
 * The `focusEventTarget` function calls the `focus()` method on the target property of the event object.
 *
 * ```jsdoc
 * @param {Event} event  the event.
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   // this element can't lose focus.
 *
 *   return (
 *     <input onBlur={focusEventTarget}/>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/focusEventTarget',
  component: FocusEventTargetTestBed,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: FocusEventTargetTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {}
