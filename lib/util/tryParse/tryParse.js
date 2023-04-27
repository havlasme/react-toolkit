/**
 * Try to parse JSON from the value, return original value on exception.
 *
 * @param {any} jsonString  the JSON string.
 * @return {any}
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
