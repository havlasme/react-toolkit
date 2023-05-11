import {useEffect, useState} from 'react'
import runCallable from '../../util/runCallable'

/**
 * The useMounted hook.
 *
 * @param {function} [callback]  a callback executed when the component is mounted.
 * @return {boolean}
 */
const useMounted = function (callback) {
  // the state. is the component mounted?
  const [state, setState] = useState(false)

  useEffect(
    function () {
      setState(true)
      return runCallable(callback)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return state
}

export default useMounted
