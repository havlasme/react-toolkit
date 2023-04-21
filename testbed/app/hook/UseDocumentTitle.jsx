import {useBoolState, useDocumentTitle} from '@havlasme/react-toolkit'

const UseDocumentTitleComponent = function () {
  useDocumentTitle('example title')

  return null
}

const UseDocumentTitleTestBed = function () {
  const [state, set] = useBoolState(false)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useDocumentTitle (state: {state.toString()})
      </h2>

      <div className="py-3 px-4 grow">
        The `useDocumentTitle` hook allows to update the title of the current web page.
        Optionally, it can restore the previous title when the component using the hook is unmounted.

        {state ? (
          <UseDocumentTitleComponent/>
        ) : null}
      </div>

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={set} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {state ? 'UnMount Component' : 'Mount Component'}
        </button>
      </div>
    </div>
  )
}

export default UseDocumentTitleTestBed
