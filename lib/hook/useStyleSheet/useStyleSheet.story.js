import UseStyleSheetTestbed from './useStyleSheet.testbed'
import UseStyleSheetTestBedJSX from './useStyleSheet.testbed?raw'

/**
 * The `useStyleSheet` hook is a declarative way to manage dynamic stylesheet loading and unloading within a component.
 * The hook takes a stylesheet location as an argument and returns the current loading state, which can be one of the following: 'loading', 'ready', 'error', or `null`.
 *
 * ```jsdoc
 * @param {string|null} location  the stylesheet location.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.destroyOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {Object|null} [option.stylesheet=null]  the optional attributes passed to the stylesheet element.
 * @return {string}
 * ```
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
 */
export default {
  title: 'Side Effect/useStyleSheet',
  component: UseStyleSheetTestbed,
  tags: ['autodocs'],
  argTypes: {
    location: {
      name: 'location',
      type: {name: 'string'},
      description: 'the stylesheet location.',
    },
  },
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
  },
}
