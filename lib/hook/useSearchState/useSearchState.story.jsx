import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UseSearchStateTestBed from './useSearchState.testbed'
import UseSearchStateTestBedJSX from './useSearchState.testbed?raw'

/**
 * The `useSearchState` hook is designed to be used with `react-router-dom`.
 * This hook allows for the easy manipulation of query string parameters in the URL.
 * The hook takes a single argument, `key`, which is the key of the query string parameter to be manipulated.
 *
 * ```jsdoc
 * @param {string} key  the key.
 * @return {Array}
 * ```
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
