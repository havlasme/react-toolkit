import {hookTestBedControl} from '../../../.storybook/component'
import UseScriptTestBed from './useScript.testbed'
import UseScriptTestBedJSX from './useScript.testbed?raw'

/**
 * The `useScript` is a custom React Hook to declaratively manage dynamic script loading and unloading within a React component.
 * The hook takes a script location as an argument and returns the current loading state of the script, which can be one of the following: 'loading', 'ready', 'error', or `null`.
 *
 * ```jsx
 * const state = useScript(location, option)
 * ```
 *
 * ```jsdoc
 * @param {string|null} location  the script location.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.destroyOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {Object|null} [option.script=null]  the optional attributes passed to the script element.
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
    destroyOnUnmount: true,
  },
}
