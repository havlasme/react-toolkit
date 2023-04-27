import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import UseBoolStateTestBed from './hook/UseBoolState'
import UseDocumentTitleTestBed from './hook/UseDocumentTitle'
import UseIntervalTestBed from './hook/UseInterval'
import UseLatestTestBed from './hook/UseLatest'
import UseMountedTestBed from './hook/UseMounted'
import UseMountPointTestBed from './hook/UseMountPoint'
import UseNanoIdTestBed from './hook/UseNanoId'
import UseNetworkStateTestBed from './hook/UseNetworkState'
import UseSearchStateTestBed from './hook/UseSearchState'
import UseSetStateTestBed from './hook/UseSetState'
import UseTimeoutTestBed from './hook/UseTimeout'
import UseWindowSizeTestBed from './hook/UseWindowSize'
import FocusEventTargetTestBed from './util/FocusEventTarget'
import IncludesTestBed from './util/Includes'
import SuspensifyTestBed from './util/Suspensify'

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <div className="py-4 px-6 space-y-6 min-h-screen bg-neutral-50">
      <div className="grid gap-4 md:gap-6 grid-cols-1 xl:grid-cols-2">
        <UseBoolStateTestBed/>
        <UseDocumentTitleTestBed/>
        <UseIntervalTestBed/>
        <UseLatestTestBed/>
        <UseMountedTestBed/>
        <UseMountPointTestBed/>
        <UseNanoIdTestBed/>
        <UseNetworkStateTestBed/>
        <UseSearchStateTestBed/>
        <UseSetStateTestBed/>
        <UseTimeoutTestBed/>
        <UseWindowSizeTestBed/>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 xl:grid-cols-2">
        <FocusEventTargetTestBed/>
        <IncludesTestBed/>
        <SuspensifyTestBed/>
      </div>
    </div>
  </React.StrictMode>,
)
