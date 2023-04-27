import {isNil} from 'ramda'
import {Suspense, useEffect, useMemo} from 'react'
import useBoolState from '../../hook/useBoolState'
import suspensify from './suspensify'

let localCache = null

const SuspensifyComponent = function () {
  const request = useMemo(function () {
    return !isNil(localCache) ? localCache : localCache = suspensify(
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve('The `Promise` was resolved.')
        }, 3000)
      }),
    )
  }, [])

  useEffect(function () {
    return function () {
      localCache = null
    }
  }, [])

  return request.read()
}

const SuspensifyTestBed = function () {
  const [mounted, setMounted] = useBoolState(false)

  return (
    <div className="space-y-4">
      <div>
        {mounted ? (
          <Suspense fallback={'LOADING ...'}>
            <SuspensifyComponent/>
          </Suspense>
        ) : null}
      </div>

      <div className="space-x-2">
        <button type="button" onClick={setMounted} className="py-1.5 px-6 uppercase bg-neutral-100 border border-neutral-400 rounded-lg">
          {mounted ? 'UnMount' : 'Mount'}
        </button>
      </div>
    </div>
  )
}

export default SuspensifyTestBed
