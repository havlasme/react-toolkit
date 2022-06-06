/**
 * Used when passing conditional property to the component.
 *
 * @param {*} value
 * @param {boolean} toNull
 * @return {*|null}
 */
const nullable = function (value, toNull = true) {
    return toNull ? null : value
}

export default nullable
