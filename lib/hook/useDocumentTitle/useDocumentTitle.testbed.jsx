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

      <div>
        current `document.title`: <strong>{latestDocumentTitle}</strong>
      </div>

      <div className="space-x-2">
        <button type="button" onClick={setMounted} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          {mounted ? 'Unmount' : 'Mount'}
        </button>
      </div>
    </div>
  )
}

export default UseDocumentTitleTestBed
