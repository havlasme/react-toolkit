import {fireEvent, renderHook} from '@testing-library/react'
import useVisibilityState from './useVisibilityState'

describe('useVisibilityState', () => {
  function doSetVisibilityState (state) {
    jest.spyOn(document, 'visibilityState', 'get').mockReturnValue(state)
    fireEvent(document, new Event('visibilitychange'))
  }

  it('should return an initial snapshot of the visibility state', () => {
    const {result} = renderHook(() => useVisibilityState())
    expect(result.current).toBe(true)
  })

  it('should call the callback when provided on visibility change', () => {
    const callbackMock = jest.fn()
    renderHook(() => useVisibilityState(callbackMock))
    doSetVisibilityState('visible')
    expect(callbackMock).toHaveBeenLastCalledWith(true)
    doSetVisibilityState('hidden')
    expect(callbackMock).toHaveBeenLastCalledWith(false)
  })

  it('should update the visibility state on visibilitychange event', () => {
    const {result} = renderHook(() => useVisibilityState())
    expect(result.current).toBe(true)
    doSetVisibilityState('visible')
    expect(result.current).toBe(true)
    doSetVisibilityState('hidden')
    expect(result.current).toBe(false)
    doSetVisibilityState('visible')
    expect(result.current).toBe(true)
  })
})
