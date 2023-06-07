import {fireEvent, renderHook} from '@testing-library/react'
import useNetworkState from './useNetworkState'

const setUp = ({callback}) => renderHook(
  ({callback}) => useNetworkState(callback),
  {
    initialProps: {callback},
  },
)

describe('useNetworkState', () => {
  const doSetNetworkState = function (state) {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(state === 'online')
    fireEvent(window, new Event(state))
  }

  it('should return an initial snapshot of the network state', () => {
    const {result} = setUp({})
    expect(result.current).toBe(true)
  })

  it('should update the network state on online event', () => {
    const {result} = setUp({})
    doSetNetworkState('offline')
    expect(result.current).toBe(false)
    doSetNetworkState('online')
    expect(result.current).toBe(true)
  })

  it('should update the network state on offline event', () => {
    const {result} = setUp({})
    expect(result.current).toBe(true)
    doSetNetworkState('offline')
    expect(result.current).toBe(false)
  })

  it('should run the callback on online event', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    doSetNetworkState('online')
    expect(callbackMock).toHaveBeenLastCalledWith(expect.any(Event), true)
  })

  it('should run the callback state on offline event', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    doSetNetworkState('offline')
    expect(callbackMock).toHaveBeenLastCalledWith(expect.any(Event), false)
  })

  it('should run only the latest callback', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock})
    const newCallbackMock = jest.fn()
    rerender({callback: newCallbackMock})
    doSetNetworkState('online')
    expect(callbackMock).not.toHaveBeenCalled()
    expect(newCallbackMock).toHaveBeenCalledTimes(1)
  })

  it('should throw an error if the callback argument is not a function|null', () => {
    expect(() => useNetworkState('string')).toThrow(TypeError)
    expect(() => useNetworkState(1)).toThrow(TypeError)
    expect(() => useNetworkState(true)).toThrow(TypeError)
    expect(() => useNetworkState([])).toThrow(TypeError)
    expect(() => useNetworkState({})).toThrow(TypeError)
  })
})
