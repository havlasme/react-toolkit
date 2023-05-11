import {createPortal} from 'react-dom'
import useBoolState from '../useBoolState'
import useMountPoint from './useMountPoint'

const Component = function ({open, onClose}) {
  const domNode = useMountPoint(
    function () {
      const element = document.createElement('div')
      element.classList.add('fixed')
      element.classList.add('inset-0')
      element.classList.add('z-50')
      return element
    })

  return createPortal(open ? (
    <div className="absolute inset-0">
      <div onClick={onClose} className="absolute inset-0 bg-black/50 z-40"/>

      <div className="relative py-3 px-4 mt-8 mx-auto max-w-5xl bg-white z-50">
        <p>
          The `useMountPoint` hook creates a DOM node for a component to be rendered outside of its current location in the React DOM hierarchy.
          This is achieved by creating a new mount point that is appended to the document body, and using the `createPortal` method to render the component into this new mount point.
        </p>

        <div className="flex py-2 px-2 justify-end">
          <button type="button" onClick={onClose} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null, domNode)
}

const UseMountPointTestBed = function () {
  const [state, setState] = useBoolState(false)

  return (
    <div className="space-y-4">
      {state ? (
        <Component open={state} onClose={setState}/>
      ) : null}

      <div className="space-x-2">
        <button type="button" onClick={setState} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          {state ? 'Close modal' : 'Open modal'}
        </button>
      </div>
    </div>
  )
}

export default UseMountPointTestBed
