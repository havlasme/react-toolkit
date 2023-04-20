/**
 * Used when passing conditional property to the component.
 *
 * @param {*} value  the value
 * @param {boolean} [toNull=true]  return null when set to true
 * @return {*|null}
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
