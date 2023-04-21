import {useBoolState, useMountPoint} from '@havlasme/react-toolkit'
import {createPortal} from 'react-dom'

const UseMountPointModal = function ({open, onClose}) {
  const domNode = useMountPoint(function () {
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
        The `useMountPoint` hook creates a DOM node for a component to be rendered outside of its current location in the React DOM hierarchy.
        This is achieved by creating a new mount point that is appended to the document body, and using the `createPortal` method to render the component into this new mount point.

      </div>
    </div>
  ) : null, domNode)
}

const UseMountPointTestBed = function () {
  const [state, set] = useBoolState(false)

  return (
    <div className="flex flex-col bg-white shadow-md">
      <h2 className="py-3 px-4 font-medium">
        useMountPoint
      </h2>

      <div className="py-3 px-4 grow">
        The `useMountPoint` hook creates a DOM node for a component to be rendered outside of its current location in the React DOM hierarchy.
        This is achieved by creating a new mount point that is appended to the document body, and using the `createPortal` method to render the component into this new mount point.

        {state ? (
          <UseMountPointModal open={state} onClose={set}/>
        ) : null}
      </div>

      <div className="flex py-2 px-2 justify-end">
        <button type="button" onClick={set} className="py-2 px-8 text-white font-medium uppercase bg-green-500 rounded-full">
          {state ? 'Hide Modal' : 'Show Modal'}
        </button>
      </div>
    </div>
  )
}

export default UseMountPointTestBed
