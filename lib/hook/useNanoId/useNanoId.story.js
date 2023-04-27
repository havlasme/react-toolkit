import UseNanoIdTestBed from './useNanoId.testbed'
import UseNanoIdTestBedJSX from './useNanoId.testbed?raw'

/**
 * The `useNanoId` hook uses the `nanoid` library to generate a unique id for each instance of a component.
 * The generated id remains the same across multiple re-renders of the same instance of a component.
 * The hook provides an option to manually specify an id and disable the random generation.
 *
 * ```jsdoc
 * @param {string|null} [id=null]  the custom id.
 * @return {string}
 * ```
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
