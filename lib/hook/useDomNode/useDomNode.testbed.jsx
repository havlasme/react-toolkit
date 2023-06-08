import {createPortal} from 'react-dom'
import useBoolState from '../useBoolState'
import useDomNode from './useDomNode'

const Component = function ({open, onClose}) {
  const domNode = useDomNode(
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
        <h2 className="mb-4 text-xl font-bold">
          useDomNode
        </h2>

        <p>
          The <code>useDomNode</code> is a custom React Hook that creates a dom node and appends it to the document body. The hook
          takes a <strong>createDomNode</strong> as an argument that should create and return a dom node. The hook <strong>returns</strong> the dom node.
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

const UseDomNodeTestbed = function () {
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

export default UseDomNodeTestbed
