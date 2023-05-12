import {createContext} from 'react'
import createCache from './createCache'
import createCacheSignal from './createCacheSignal'

// the cache context. tuple of cache and signal.
const CacheContext = createContext([createCache(), createCacheSignal()])

export default CacheContext
