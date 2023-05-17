import {hookTestBedControl} from '../../../.storybook/component'
import UseStyleSheetTestbed from './useStyleSheet.testbed'
import UseStyleSheetTestBedJSX from './useStyleSheet.testbed?raw'

/**
 * The `useStyleSheet` is a custom React Hook to declaratively manage dynamic stylesheet loading and unloading within a React component.
 * The hook takes a stylesheet location as an argument and returns the current loading state, which can be one of the following: 'loading', 'ready', 'error', or `null`.
 *
 * ```jsx
 * const state = useStyleSheet(location, option)
 * ```
 *
 * ```jsdoc
 * @param {string|null} location  the stylesheet location.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.destroyOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {Object|null} [option.stylesheet=null]  the optional attributes passed to the stylesheet element.
 * @return {string}
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
    destroyOnUnmount: {
      name: 'destroyOnUnmount',
      type: {name: 'boolean'},
      description: 'unmount the element on unmount. (must not have any active reference).',
    },
  },
  decorators: [
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
    destroyOnUnmount: true,
  },
}
