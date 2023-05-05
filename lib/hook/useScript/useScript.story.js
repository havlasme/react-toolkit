import UseScriptTestBed from './useScript.testbed'
import UseScriptTestBedJSX from './useScript.testbed?raw'

/**
 * The `useScript` hook is a declarative way to manage dynamic script loading and unloading within a component.
 * The hook takes a script location as an argument and returns the current loading state of the script, which can be one of the following: 'loading', 'ready', 'error', or `null`.
 *
 * ```jsdoc
 * @param {string|null} location  the script location.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.destroyOnUnmount=true]  unmount the element on unmount. (must not have any active reference).
 * @param {Object|null} [option.script=null]  the optional attributes passed to the script element.
 * @return {string}
 * ```
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
  title: 'Side Effect/useScript',
  component: UseScriptTestBed,
  tags: ['autodocs'],
  argTypes: {
    location: {
      name: 'location',
      type: {name: 'string'},
      description: 'the script location.',
    },
  },
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
    location: '/useScript/console.log.js',
  },
}
