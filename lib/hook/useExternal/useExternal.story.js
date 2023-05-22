import UseExternalTestBed from './useExternal.testbed'
import UseExternalTestBedJSX from './useExternal.testbed?raw'

/**
 * The `useExternal` is a custom React Hook that provides a declarative way to manage dynamic external loading and
 * unloading within a React component. The hook takes a **createDomNode** function as an argument and **returns** the
 * current loading state of the external, which can be one of the following: 'loading', 'ready', 'error', or `null`.
 * Optionally, the hook implements a React Suspense to suspend the component until the external resource is loaded.
 *
 * *This hook mostly serves as a base for the `useScript` and `useStyleSheet`.*
 *
 * ```jsx
 * const state = useExternal(createDomNode, {removeOnUnmount, usesSuspense})
 * ```
 *
 * ```jsdoc
 * @param {function} createDomNode  the function to create the dom node.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.removeOnUnmount=true]  remove the element from dom on unmount. (must not have any active reference).
 * @param {boolean} [option.usesSuspense=false]  suspend the component until the external resource is loaded.
 * @return {string|null}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const createDomNode = function () {
 *   const domNode = document.createElement('script')
 *   domNode.src = 'https://example.com/script.js'
 *   return domNode
 * }
 *
 * const Component = function () {
 *   const external = useExternal(createDomNode)
 *
 *   return (
 *     <div>
 *       {external === 'error' ? (
 *         <div role="alert">
 *           <code>script.js</code> script was not loaded.
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
 * const createDomNode = function () {
 *   const domNode = document.createElement('script')
 *   domNode.src = 'https://example.com/script.js'
 *   return domNode
 * }
 *
 * const Component = function () {
 *   const external = useExternal(createDomNode, {usesSuspense: true})
 *
 *   return (
 *     <div>
 *       <code>script.js</code> script was loaded.
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
  title: 'Hook/useExternal',
  component: UseExternalTestBed,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      source: {
        code: UseExternalTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
