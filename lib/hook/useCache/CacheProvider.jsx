import {useMemo} from 'react'
import CacheContext from './CacheContext'
import createObservableCache from './createObservableCache'

/**
 * The CacheProvider component.
 *
 * @return {JSX.Element}
 * @component
 */
const CacheProvider = function ({cache, children}) {
  // the cache.
  const value = useMemo(
    function () {
      if (Object.hasOwn(cache, 'subscribe')) {
        return cache
      }
      return createObservableCache(cache)
    }, [cache])

  return (
    <CacheContext.Provider value={value}>
      {children}
    </CacheContext.Provider>
  )
}

export default CacheProvider
