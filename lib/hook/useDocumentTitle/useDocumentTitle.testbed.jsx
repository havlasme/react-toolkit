import {useLayoutEffect, useState} from 'react'
import useBoolState from '../useBoolState'
import useDocumentTitle from './useDocumentTitle'

const Component = function ({restoreOnUnmount, title}) {
  useDocumentTitle(title, {restoreOnUnmount})

  return null
}

const UseDocumentTitleTestBed = function ({restoreOnUnmount, title}) {
  const [mounted, setMounted] = useBoolState(false)
  const [latestDocumentTitle, setLatestDocumentTitle] = useState(document.title)

  useLayoutEffect(
    function () {
      setLatestDocumentTitle(document.title)
    })

  return (
    <div className="space-y-4">
      {mounted ? (
        <Component restoreOnUnmount={restoreOnUnmount} title={title}/>
      ) : null}

      <div className="space-y-2">
        current `document.title`: <strong>{latestDocumentTitle}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={setMounted} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          {mounted ? 'Unmount' : 'Mount'}
        </button>
      </div>
    </div>
  )
}

export default UseDocumentTitleTestBed
