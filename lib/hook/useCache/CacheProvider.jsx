import {useMemo} from 'react'
import CacheContext from './CacheContext'
import createCacheSignal from './createCacheSignal'

/**
 * The CacheProvider component.
 *
 * @return {JSX.Element}
 * @component
 */
const CacheProvider = function ({cache, children, signal}) {
  // the cache and the signal value.
  // memoized to avoid unnecessary re-rendering.
  const value = useMemo(function () {
    return [cache, signal ?? createCacheSignal()]
  }, [cache, signal])

  return (
    <CacheContext.Provider value={value}>
      {children}
    </CacheContext.Provider>
  )
}

export default CacheProvider
