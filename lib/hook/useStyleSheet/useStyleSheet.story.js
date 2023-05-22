import {hookTestBedControl, hookTestBedSuspense} from '../../../.storybook/component'
import UseStyleSheetTestbed from './useStyleSheet.testbed'
import UseStyleSheetTestBedJSX from './useStyleSheet.testbed?raw'

/**
 * The `useStyleSheet` is a custom React Hook to declaratively manage dynamic stylesheet loading and unloading within a React component.
 * The hook takes a stylesheet location as an argument and returns the current loading state, which can be one of the following: 'loading', 'ready', 'error', or `null`.
 * Optionally, the hook implements a React Suspense to suspend the component until the external resource is loaded.
 *
 * ```jsx
 * const state = useStyleSheet(location, {attributes, removeOnUnmount, usesSuspense})
 * ```
 *
 * ```jsdoc
 * @param {string|null} location  the stylesheet location.
 * @param {Object} [option]  the option object.
 * @param {Object|null} [option.attributes=null]  the optional attributes passed to the link element.
 * @param {boolean} [option.removeOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {boolean} [option.usesSuspense=false]  suspend the component until the external resource is loaded.
 * @return {string|null}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const customcss = useStyleSheet('https://example.com/custom.css')
 *
 *   return (
 *     <div>
 *       {customcss === 'error' ? (
 *         <div role="alert">
 *           <code>custom.css</code> stylesheet was not loaded.
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
 *   const customcss = useStyleSheet('https://example.com/custom.css', {usesSuspense: true}})
 *
 *   return (
 *     <div>
 *       <code>custom.css</code> stylesheet was loaded.
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
  title: 'Hook/useStyleSheet',
  component: UseStyleSheetTestbed,
  tags: ['autodocs'],
  argTypes: {
    location: {
      name: 'location',
      type: {name: 'string'},
      description: 'the stylesheet location.',
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
        code: UseStyleSheetTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    location: '/useStyleSheet/custom.css',
    removeOnUnmount: true,
    usesSuspense: false,
  },
}
