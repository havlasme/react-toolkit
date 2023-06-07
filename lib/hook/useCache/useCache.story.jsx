import {hookTestBedControl} from '../../../.storybook/component'
import CacheProvider from './CacheProvider'
import createCache from './createCache'
import UseCacheTestBed from './useCache.testbed'
import UseCacheTestBedJSX from './useCache.testbed?raw'

/**
 * The `useCache` is a custom React Hook designed to provide caching functionality within React component. The hook
 * takes a cache **key** and an optional **initialState** as arguments and **returns** a tuple with the latest cached
 * value and a function to update it. The hook utilizes the `CacheContext` to inject a cache implementation, it must
 * provide at least the `get`, `set`, and `has` methods. Additionally, the hook utilizes pub-sub signaling to ensure
 * synchronization between instances that are associated with the same cache key within the scope of the `CacheContext`.
 *
 * ```jsx
 * const [state, setState] = useCache(key, initialState)
 * ```
 *
 * ```jsdoc
 * @param {string} key  the cache key.
 * @param {any} [initialState=null]  the initial state.
 * @return {[any,function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useCache('cache-key')
 *
 *   const updateStateCallback = useCallback(
 *     function () {
 *       setState('new-state')
 *     }, [])
 *
 *   return (
 *     <div>
 *       {state}
 *
 *       <button type="button" onClick={updateStateCallback}>
 *         Update state
 *       </button>
 *     </div>
 *   )
 * }
 *
 * const App = function () {
 *   const cache = useMemo(
 *     function () {
 *       return createCache()
 *     }, [])
 *
 *   return (
 *     <CacheProvider cache={cache}>
 *       <Component/>
 *     </CacheProvider>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useCache',
  component: UseCacheTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseCacheTestBedJSX,
      },
    },
  },
}

const cache = createCache()

/**
 * ## The TestBed
 */
export const HookTestBed = {
  decorators: [
    (Component) => (
      <CacheProvider cache={cache}>
        <Component/>
      </CacheProvider>
    ),
  ],
}
