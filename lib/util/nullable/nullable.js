/**
 * Mask any value to `null` when second argument is to `true`.
 *
 * @param {any} value  the value.
 * @param {boolean} [toNull=true]  should return `null`.
 * @return {any}
 */
const nullable = function (value, toNull = true) {
  return toNull ? null : value
}

export default nullable
