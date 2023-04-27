import TryParseTestBed from './tryParse.testbed'
import TryParseTestBedJSX from './tryParse.testbed?raw'

/**
 * The `tryParse` function takes a single argument, and attempts to parse it using the `JSON.parse` method.
 * If parsing is successful, the function returns the parsed value, which is expected to be an object, otherwise it returns the original value.
 *
 * ```jsdoc
 * @param {any} jsonString  the JSON string.
 * @return {any}
 * ```
 *
 * ```jsx
 * const jsonString = '{"test":"value"}'
 *
 * console.log(tryParse(jsonString))
 * ```
 */
export default {
  title: 'Util/tryParse',
  component: TryParseTestBed,
  tags: ['autodocs'],
  argTypes: {
    jsonString: {
      name: 'jsonString',
      type: {name: 'string'},
      description: 'the JSON string.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: TryParseTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    jsonString: '{"test":"value"}',
  },
}
