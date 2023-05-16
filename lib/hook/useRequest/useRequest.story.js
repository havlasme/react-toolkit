import {hookTestBedControl} from '../../../.storybook/component'
import UseRequestTestBed from './useRequest.testbed'
import UseRequestTestBedJSX from './useRequest.testbed?raw'

/**
 * The `useRequest` is a custom React hook that provides a convenient way to track an asynchronous request state.
 * The hook takes a request function as an argument and returns a tuple with the current state and dispatch function.
 * The request function must return a `Promise`.
 *
 * ```jsx
 * const [state, dispatch] = useRequest(request)
 * ```
 *
 * ```jsdoc
 * @param {function} request  the request. must return `Promise`.
 * @return {[Object,function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const request = function () {
 *   return fetch('https://example.com/example.json')
 *   .then(
 *     function (response) {
 *       return response.json()
 *     })
 * }
 *
 * const Component = function () {
 *   const [state, dispatch] = useRequest(request)
 *
 *   const dispatchRequestCallback = useCallback(
 *     function () {
 *       dispatch()
 *     }, [dispatch])
 *
 *   return (
 *     <div>
 *       {state.loading ? (
 *         <div>
 *           Loading...
 *         </div>
 *       ) : (
 *         <div>
 *           {state.response}
 *         </div>
 *       )}
 *
 *      <button onClick={dispatchRequestCallback}>
 *        {fetching ? 'Fetching...' : 'Dispatch request'}
 *      </button>
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'State/useRequest',
  component: UseRequestTestBed,
  tags: ['autodocs'],
  argTypes: {
    request: {
      name: 'request',
      type: {name: 'string'},
      description: 'the request uri.',
    },
    delay: {
      name: 'delay',
      type: {name: 'number'},
      description: 'the delay in milliseconds (simulate a slow request).',
    },
  },
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseRequestTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    request: '/useRequest/testbed.json',
    delay: 0,
  },
}
