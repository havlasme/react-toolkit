import NullableTestBed from './nullable.testbed'
import NullableTestBedJSX from './nullable.testbed?raw'

/**
 * The `nullable` is a simple utility function that returns either the value passed in or `null`, based on a boolean parameter `toNull`.
 *
 * ```jsdoc
 * @param {any} value  the value.
 * @param {boolean} [toNull=true]  should return `null`.
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
 *     <button type="button" onClick={nullable(onClick, disabled)}>
 *       ...
 *     </button>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/nullable',
  component: NullableTestBed,
  tags: ['autodocs'],
  argTypes: {
    value: {
      name: 'value',
      type: {name: 'string'},
      description: 'the value.',
    },
    toNull: {
      name: 'toNull',
      type: {name: 'boolean'},
      description: 'should return `null`.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: NullableTestBedJSX,
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
    toNull: true,
  },
}
