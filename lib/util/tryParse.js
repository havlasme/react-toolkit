/**
 * Try to parse JSON from the value, return original value on exception.
 *
 * @param {any} value  the value
 * @return {any}
 * @example
 *
 * const response = null
 *
 * console.log(tryParse(response))
 * // this should log null
 */
const tryParse = function (value) {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export default tryParse
