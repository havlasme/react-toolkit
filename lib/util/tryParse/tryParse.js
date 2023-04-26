/**
 * Try to parse JSON from the value, return original value on exception.
 *
 * @param {any} jsonString  the JSON string.
 * @return {any}
 * @example
 *
 * const response = null
 *
 * console.log(tryParse(response))
 * // this should log null
 */
const tryParse = function (jsonString) {
  try {
    const parsedValue = JSON.parse(jsonString)
    return (typeof parsedValue === 'object') ? parsedValue : jsonString
  } catch {
    return jsonString
  }
}

export default tryParse
