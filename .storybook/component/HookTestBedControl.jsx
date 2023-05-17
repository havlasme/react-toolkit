import {useState} from 'react'

/**
 * The HookTestBedControl component.
 *
 * @return {JSX.Element}
 * @component
 */
const HookTestBedControl = function ({children}) {
  const [key, setKey] = useState(1)
  const [rerender, setRerender] = useState(1)

  return (
    <div key={key}>
      {children}

      <div className="mt-4 pt-4 space-x-2 border-t">
        <button onClick={() => setRerender(x => x + 1)} className="py-1.5 px-6 text-neutral-600 font-medium border rounded-md">
          Re-render hook ({rerender})
        </button>

        <button onClick={() => setKey(x => x + 1)} className="py-1.5 px-6 text-neutral-600 font-medium border rounded-md">
          Remount hook ({key})
        </button>
      </div>
    </div>
  )
}

export default HookTestBedControl