import {act, renderHook} from '@testing-library/react'
import useInterval from './useInterval'

const setUp = ({callback, interval}) => renderHook(
  ({callback, interval}) => useInterval(callback, interval),
  {
    initialProps: {callback, interval},
  },
)

describe('useInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should return the cancel function', () => {
    const callbackMock = jest.fn()
    const {result} = setUp({callback: callbackMock, interval: 100})
    expect(result.current).toBeInstanceOf(Function)
  })

  it('should schedule and execute callback at given interval', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock, interval: 100})
    expect(callbackMock).not.toHaveBeenCalled()
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(200)
    expect(callbackMock).toHaveBeenCalledTimes(3)
  })

  it('should not schedule the callback if interval is null', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock, interval: null})
    jest.advanceTimersByTime(150)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should not schedule the callback interval if interval is not set', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    jest.advanceTimersByTime(150)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should cancel the scheduled callback using the cancel function', () => {
    const callbackMock = jest.fn()
    const {result} = setUp({callback: callbackMock, interval: 100})
    const cancelInterval = result.current
    jest.advanceTimersByTime(50)
    act(() => void cancelInterval())
    jest.advanceTimersByTime(200)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should cancel the scheduled callback using the cancel function', () => {
    const callbackMock = jest.fn()
    const {result} = setUp({callback: callbackMock, interval: 100})
    const cancelInterval = result.current
    jest.advanceTimersByTime(250)
    expect(callbackMock).toHaveBeenCalledTimes(2)
    cancelInterval()
    jest.advanceTimersByTime(200)
    expect(callbackMock).toHaveBeenCalledTimes(2)
  })

  it('should cancel the scheduled interval on unmount', () => {
    const callbackMock = jest.fn()
    const {unmount} = setUp({callback: callbackMock, interval: 100})
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    unmount()
    jest.advanceTimersByTime(200)
    expect(callbackMock).toHaveBeenCalledTimes(1)
  })

  it('should reset the scheduled interval on interval change', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock, interval: 100})
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    rerender({callback: callbackMock, interval: 200})
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(100)
    expect(callbackMock).toHaveBeenCalledTimes(2)
  })

  it('should reset the interval on callback change', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock, interval: 100})
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    const newCallbackMock = jest.fn()
    rerender({callback: newCallbackMock, interval: 100})
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    expect(newCallbackMock).toHaveBeenCalledTimes(1)
  })

  it('should return a memoized cancelInterval callback', () => {
    const callbackMock = jest.fn()
    const {result, rerender} = setUp({callback: callbackMock, interval: 100})
    const cancelInterval = result.current
    jest.advanceTimersByTime(150)
    rerender({callback: callbackMock, interval: 100})
    expect(result.current).toBe(cancelInterval)
  })
})
