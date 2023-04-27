import {nanoid} from 'nanoid'
import {useMemo} from 'react'

/**
 * The useNanoId hook.
 *
 * @param {string|null} [id=null]  the custom id.
 * @return {string}
 * @see https://github.com/ai/nanoid
 * @example
 *
 * const Component = function ({ id: htmlId }) {
 *   const id = useNanoId(htmlId)
 *
 *   return (
 *     <div>
 *       <label htmlFor={id}>
 *         Text input
 *       </label>
 *
 *       <input id={id}/>
 *     </div>
 *   )
 * }
 */
const useNanoId = function (id = null) {
  return useMemo(function () {
    return id === null ? nanoid() : id
  }, [id])
}

export default useNanoId
