import LastEventCallbackTestBed from './lastEventCallback.testbed'
import LastEventCallbackTestBedJSX from './lastEventCallback.testbed?raw'

/**
 * The `lastEventCallback` function can be used to stop event propagation.
 * Optionally, it can prevent default action execution, or blur an active element.
 *
 * ```jsdoc
 * @param {Event} event  the event object.
 * @param {Object|null} [option]  the option object.
 * @param {boolean} [option.blurActiveElement=false]  blur an active element.
 * @param {boolean} [option.preventDefault=false]  prevent the default action.
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   const onSubmitCallback = useCallback(
 *     function (event) {
 *       lastEventCallback(event, {preventDefault: true})
 *
 *       console.log('submitted!')
 *     }, [])
 *
 *   return (
 *     <form onSubmit={onSubmitCallback}>
 *       <button type="submit">
 *         Submit
 *       </button>
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/lastEventCallback',
  component: LastEventCallbackTestBed,
  tags: ['autodocs'],
  argTypes: {
    blurActiveElement: {
      name: 'blurActiveElement',
      type: {name: 'boolean'},
      description: 'blur an active element.',
    },
    preventDefault: {
      name: 'preventDefault',
      type: {name: 'boolean'},
      description: 'prevent the default action.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: LastEventCallbackTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    blurActiveElement: true,
    preventDefault: true,
  },
}
