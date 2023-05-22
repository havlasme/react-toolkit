import {fireEvent, renderHook} from '@testing-library/react'
import useNetworkState from './useNetworkState'

const setUp = (callback) =>
  renderHook(() => useNetworkState(callback))

describe('useNetworkState', () => {
  function doSetNetworkState (state) {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(state === 'online')
    fireEvent(window, new Event(state))
  }

  it('should return an initial snapshot of the network state', () => {
    const {result} = setUp()
    expect(result.current).toBe(true)
  })

  it('should call the callback when provided on visibility change', () => {
    const callbackMock = jest.fn()
    setUp(callbackMock)
    doSetNetworkState('online')
    expect(callbackMock).toHaveBeenLastCalledWith(true)
    doSetNetworkState('offline')
    expect(callbackMock).toHaveBeenLastCalledWith(false)
  })

  it('should update the network state when the network goes offline', () => {
    const {result} = setUp()
    expect(result.current).toBe(true)
    doSetNetworkState('offline')
    expect(result.current).toBe(false)
  })

  it('should update the network state when the network goes online', () => {
    const {result} = setUp()
    doSetNetworkState('offline')
    expect(result.current).toBe(false)
    doSetNetworkState('online')
    expect(result.current).toBe(true)
  })
})
