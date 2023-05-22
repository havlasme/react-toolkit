import {hookTestBedControl, hookTestBedSuspense} from '../../../.storybook/component'
import UseScriptTestBed from './useScript.testbed'
import UseScriptTestBedJSX from './useScript.testbed?raw'

/**
 * The `useScript` is a custom React Hook that provides a declarative way to manage dynamic stylesheet loading and
 * unloading within a React component. The hook takes a script **location** as an argument and **returns** the current
 * loading state of the script, which can be one of the following: 'loading', 'ready', 'error', or `null`. Optionally,
 * the hook implements a React Suspense to suspend the component until the external resource is loaded.
 *
 * ```jsx
 * const state = useScript(location, {attributes, removeOnUnmount, usesSuspense})
 * ```
 *
 * ```jsdoc
 * @param {string|null} location  the script location.
 * @param {Object} [option]  the option object.
 * @param {Object|null} [option.attributes=null]  the optional attributes passed to the script element.
 * @param {boolean} [option.removeOnUnmount=true]  remove the element from dom on unmount. (must not have any active reference).
 * @param {boolean} [option.usesSuspense=false]  suspend the component until the external resource is loaded.
 * @return {string}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const analytics = useScript('https://example.com/analytics.js')
 *
 *   return (
 *     <div>
 *       {analytics === 'error' ? (
 *         <div role="alert">
 *           <code>analytics.js</code> script was not loaded.
 *         </div>
 *       ) : null}
 *     </div>
 *   )
 * }
 * ```
 *
 * #### Example with `usesSuspense`
 *
 * ```jsx
 * const Component = function () {
 *   const analytics = useScript('https://example.com/analytics.js', {usesSuspense: true})
 *
 *   return (
 *     <div>
 *       <code>analytics.js</code> script was loaded.
 *     </div>
 *   )
 * )
 *
 * const App = function () {
 *   return (
 *     <ErrorBoundary fallback={<div>Something went wrong.</div>}>
 *       <Suspense fallback={<div>Loading...</div>}>
 *         <Component/>
 *       </Suspense>
 *     </ErrorBoundary>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useScript',
  component: UseScriptTestBed,
  tags: ['autodocs'],
  argTypes: {
    location: {
      name: 'location',
      type: {name: 'string'},
      description: 'the script location.',
    },
    removeOnUnmount: {
      name: 'removeOnUnmount',
      type: {name: 'boolean'},
      description: 'remove the element from dom on unmount. (must not have any active reference).',
    },
    usesSuspense: {
      name: 'usesSuspense',
      type: {name: 'boolean'},
      description: 'suspend the component until the external resource is loaded.',
    },
  },
  decorators: [
    hookTestBedSuspense,
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseScriptTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    location: '/useScript/timestamp.js',
    removeOnUnmount: true,
    usesSuspense: false,
  },
}
