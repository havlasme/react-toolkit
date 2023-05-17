import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UseSearchStateTestBed from './useSearchState.testbed'
import UseSearchStateTestBedJSX from './useSearchState.testbed?raw'

/**
 * The `useSearchState` is a custom React Hook that allows for the easy manipulation of query string parameters in the URL.
 * The hook takes a key argument which is the key of the query string parameter and returns a tuple with the current value and a function to update it.
 * The hook is designed to be used with `react-router-dom` - must be installed as project dependency.
 *
 * ```jsx
 * const [state, setState] = useSearchState(paramName)
 * ```
 *
 * ```jsdoc
 * @param {string} key  the key.
 * @return {Array}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useSearchState('paramName')
 *
 *   return (
 *     <div>
 *       <input>
 *     </div>
 *   )
 * }
 *
 * ```
 */
export default {
  title: 'State/useSearchState',
  component: UseSearchStateTestBed,
  tags: ['autodocs'],
  decorators: [
    (Component) => (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Component/>}/>
        </Routes>
      </BrowserRouter>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: UseSearchStateTestBedJSX,
      },
    },
  },
}

export const HookTestBed = {}
