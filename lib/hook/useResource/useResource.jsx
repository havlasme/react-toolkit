import useCache from '../useCache'

const useResource = function (cacheKey, resource) {
  const [state, setState] = useCache(cacheKey, {exception: null, fetching: false, initialized: false, loading: false, ok: false, response: null})


  return [state]
}

export default useResource
