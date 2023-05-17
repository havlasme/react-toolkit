import {hookTestBedControl} from '../../../.storybook/component'
import UseNanoIdTestBed from './useNanoId.testbed'
import UseNanoIdTestBedJSX from './useNanoId.testbed?raw'

/**
 * The `useNanoId` is a custom React Hook that uses the `nanoid` library to generate a unique id.
 * The hook takes an optional id as an argument and returns random unique id when optional id is not provided.
 * The randomly generated id is stable within an instance of React component.
 *
 * ```jsx
 * const nanoId = useNanoId(id)
 * ```
 *
 * ```jsdoc
 * @param {string|null} [id=null]  the custom id.
 * @return {string}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function ({id, label, ..rest}) {
 *   const htmlId = useNanoId(id)
 *
 *   return (
 *     <div>
 *       <label htmlFor={htmlId}>
 *         {label}
 *       </label>
 *
 *       <input id={htmlId} {...rest}/>
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'State/useNanoId',
  component: UseNanoIdTestBed,
  tags: ['autodocs'],
  argTypes: {
    id: {
      name: 'id',
      type: {name: 'string'},
      description: 'the custom id.',
    },
  },
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseNanoIdTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
