/**
 * Try to parse JSON from the value, return original value on failure.
 *
 * @param {*} value
 * @return {*}
 */
const tryParse = function (value) {
    try {
        return JSON.parse(value)
    } catch {
        return value
    }
}

export default tryParse
