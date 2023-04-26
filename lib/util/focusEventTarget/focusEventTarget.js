/**
 * Focus the event's current target element.
 * Doesn't work in `Firefox`.
 *
 * @param {Event} event
 * @example
 *
 * const Component = function () {
 *   return (
 *     // shouldn't lose focus once focused
 *     <input onBlur={focusEventTarget}/>
 *   )
 * }
 */
const focusEventTarget = function (event) {
  event.currentTarget.focus()
}

export default focusEventTarget
