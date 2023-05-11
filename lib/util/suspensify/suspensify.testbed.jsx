import {isNil} from 'ramda'
import {Suspense, useEffect, useMemo} from 'react'
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

  useEffect(
    function () {
      return function () {
        localCache = null
      }
    }, [])

  return request.read()
}

const SuspensifyTestBed = function () {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Suspense fallback={'LOADING ...'}>
          <SuspensifyComponent/>
        </Suspense>
      </div>
    </div>
  )
}

export default SuspensifyTestBed
