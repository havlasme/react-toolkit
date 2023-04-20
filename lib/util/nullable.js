/**
 * Mask any value to `null` when second argument is set to `true`.
 *
 * @param {any} value  the value.
 * @param {boolean} [toNull=true]  should return `null`.
 * @return {any}
 * @example
 *
 * const Component = function ({ disabled }) {
 *   const onClick = useCallback(function () {
 *     console.log('click event')
 *   }, [])
 *
 *   return (
 *     <button type="button" onClick={nullable(onClick, disabled)}>
 *       ...
 *     </button>
 *   )
 * }
 */
const nullable = function (value, toNull = true) {
  return toNull ? null : value
}

export default nullable
