import {useRef} from 'react'

/**
 * The useLatest hook.
 *
 * @param {any} value  the value.
 * @return {{current: any}}
 */
const useLatest = function (value) {
  const ref = useRef(value)
  ref.current = value
  return ref
}

export default useLatest
