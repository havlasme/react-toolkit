/**
 * Focus the event's target element.
 * Doesn't work in `Firefox`!
 *
 * @param {Event} event  the event.
 */
const focusEventTarget = function (event) {
  event.target.focus()
}

export default focusEventTarget
