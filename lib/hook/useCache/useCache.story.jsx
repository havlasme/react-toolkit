import {hookTestBedControl} from '../../../.storybook/component'
import CacheProvider from './CacheProvider'
import createCache from './createCache'
import UseCacheTestBed from './useCache.testbed'
import UseCacheTestBedJSX from './useCache.testbed?raw'

/**
 * The `useCache` is a custom React Hook designed to provide caching functionality within React component.
 * The hook takes a cache key as an argument and returns a tuple with the current cached value and a function to update it.
 * The hook utilizes the `CacheContext` to inject a cache implementation, that must implement at least the `get` and `set` methods.
 * Additionally, the hook utilizes signaling to ensure synchronization between instances that are associated with the same cache key within the scope of the `CacheContext`.
 *
 * ```jsx
 * const [state, setState] = useCache('key')
 * ```
 *
 * ```jsdoc
 * @param {string} key  the cache key.
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
 *     function() {
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
  title: 'State/useCache',
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
    function (Component) {
      return (
        <CacheProvider cache={cache}>
          <Component/>
        </CacheProvider>
      )
    },
  ],
}
