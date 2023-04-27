import {useEffect, useState} from 'react'
import runCallable from '../../util/runCallable'

/**
 * The useMounted hook.
 *
 * @param {function} [callback]  a callback executed when the component is mounted.
 * @return {boolean}
 */
const useMounted = function (callback) {
  const [mounted, set] = useState(false)

  useEffect(function () {
    set(true)
    return runCallable(callback)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return mounted
}

export default useMounted
