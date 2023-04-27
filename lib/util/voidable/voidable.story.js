import VoidableTestBed from './voidable.testbed'
import VoidableTestBedJSX from './voidable.testbed?raw'

/**
 * The `voidable` is a simple utility function that returns either the value passed in or `void 0`, based on a boolean parameter `toVoid`.
 *
 * ```jsdoc
 * @param {any} value  the value.
 * @param {boolean} [toVoid=true]  should return `void 0`.
 * @return {any}
 * ```
 *
 * ```jsx
 * const Component = function ({disabled}) {
 *   const onClick = useCallback(
 *     function () {
 *       console.log('click event')
 *     }, [])
 *
 *   return (
 *     <button type="button" onClick={voidable(onClick, disabled)}>
 *       ...
 *     </button>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/voidable',
  component: VoidableTestBed,
  tags: ['autodocs'],
  argTypes: {
    value: {
      name: 'value',
      type: {name: 'string'},
      description: 'the value.',
    },
    toVoid: {
      name: 'toVoid',
      type: {name: 'boolean'},
      description: 'should return `void 0`.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: VoidableTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    value: 'test value',
    toVoid: false,
  },
}
