import {Suspense} from 'react'
import HookTestBedErrorBoundary from './HookTestBedErrorBoundary'

const hookTestBedSuspense = function (TestBed) {
  return (
    <HookTestBedErrorBoundary>
      <Suspense fallback={<div>React.Suspense loading...</div>}>
        <TestBed/>
      </Suspense>
    </HookTestBedErrorBoundary>
  )
}

export default hookTestBedSuspense
