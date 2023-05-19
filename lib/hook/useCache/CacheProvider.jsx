import {useMemo} from 'react'
import CacheContext from './CacheContext'

/**
 * The CacheProvider component.
 *
 * @return {JSX.Element}
 * @component
 */
const CacheProvider = function ({cache, children, signal}) {
  // the cache and the signal instance.
  // memoized to avoid unnecessary re-rendering.
  const value = useMemo(
    function () {
      return [cache, signal]
    }, [cache, signal])

  return (
    <CacheContext.Provider value={value}>
      {children}
    </CacheContext.Provider>
  )
}

export default CacheProvider
