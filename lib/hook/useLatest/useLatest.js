import {useRef} from 'react'

/**
 * The useLatest hook.
 *
 * @param {any} value  the value.
 * @return {Object}
 * @example
 *
 * const Component = function () {
 *   const [state, setState] = useState('value')
 *   const stateLatest = useLatest(state)
 *
 *   const onSubmitCallback = useCallback(function () {
 *     setTimeout(function () {
 *       console.log(stateLatest.current)
 *       // the stateLatest should contain actual value
 *     }, 3000)
 *   }, [stateLatest])
 *
 *   return (
 *     <div>
 *       ...
 *       <button onClick={onClickCallback}>
 *         Click Me!
 *       </button>
 *     </div>
 *   )
 * }
 */
const useLatest = function (value) {
  const ref = useRef(value)
  ref.current = value
  return ref
}

export default useLatest
