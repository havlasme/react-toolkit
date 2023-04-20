/**
 * Mask any value to `void 0` when second argument is set to `true`.
 *
 * @param {any} value  the value.
 * @param {boolean} [toVoid=true]  should return `void 0`.
 * @return {any}
 * @example
 *
 * const Component = function ({ disabled }) {
 *   const onClick = useCallback(function () {
 *     console.log('click event')
 *   }, [])
 *
 *   return (
 *     <button type="button" onClick={voidable(onClick, disabled)}>
 *       ...
 *     </button>
 *   )
 * }
 */
const voidable = function (value, toVoid = true) {
  return toVoid ? void 0 : value
}

export default voidable
