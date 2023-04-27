/**
 * Mask any value to `void 0` when second argument is to `true`.
 *
 * @param {any} value  the value.
 * @param {boolean} [toVoid=true]  should return `void 0`.
 * @return {any}
 */
const voidable = function (value, toVoid = true) {
  return toVoid ? void 0 : value
}

export default voidable
