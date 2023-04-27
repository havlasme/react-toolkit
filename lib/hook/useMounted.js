import {useEffect, useState} from 'react'
import runCallable from '../util/runCallable'

/**
 * The useMounted hook.
 *
 * @param {function} [callback=null]  a callback executed when the component is mounted.
 * @return {boolean}
 * @example
 *
 * const Component = function () {
 *   const mounted = useMounted(function () {
 *     console.log('executed only once at component mount')
 *   })
 *
 *   return mounted ? (
 *     <div>
 *       ...
 *     </div>
 *   ) : null
 * }
 */
const useMounted = function (callback = null) {
  const [mounted, set] = useState(false)

  useEffect(function () {
    set(true)
    return runCallable(callback)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return mounted
}

export default useMounted
