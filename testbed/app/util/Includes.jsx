import {includes, useSetState} from '@havlasme/react-toolkit'
import {useCallback} from 'react'

const IncludesTestBed = function () {
  const [state, set] = useSetState({haystack: '', needle: ''})

  const onChangeCallback = useCallback(function (event) {
    set({[event.target.name]: event.target.value})
  }, [set])

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        includes (result: {includes(state.haystack, state.needle).toString()})
      </h2>

      <div className="py-3 px-4 grow">
        The `includes` function returns a boolean value indicating whether the needle string was found in the haystack string.
        Values are normalized by converting them to lowercase and removing any diacritic marks, using the Unicode Normalization Form Canonical Decomposition (NFD)

        <label className="block mt-4">
          Haystack
        </label>

        <input name="haystack" value={state.haystack} onChange={onChangeCallback} className="mt-4 py-1 px-2 w-full border"/>

        <label className="block mt-4">
          Needle
        </label>

        <input name="needle" value={state.needle} onChange={onChangeCallback} className="mt-4 py-1 px-2 w-full border"/>
      </div>
    </div>
  )
}

export default IncludesTestBed
