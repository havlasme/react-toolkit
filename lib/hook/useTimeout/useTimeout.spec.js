import {renderHook} from '@testing-library/react'
import useTimeout from './useTimeout'

const setUp = ({callback, delay}) => renderHook(
  ({callback, delay}) => useTimeout(callback, delay),
  {
    initialProps: {callback, delay},
  },
)

describe('useTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should run the callback after the delay', () => {
    const callbackMock = jest.fn()
    const {result} = setUp({callback: callbackMock, delay: 100})
    expect(callbackMock).not.toHaveBeenCalled()
    expect(result.current).toBeInstanceOf(Function)
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(1)
  })

  it('should not set the timeout if delay is null', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock, delay: null})
    jest.advanceTimersByTime(50)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should not set the timeout if delay is not set', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    jest.advanceTimersByTime(50)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should cancel the timeout', () => {
    const callbackMock = jest.fn()
    const {result} = setUp({callback: callbackMock, delay: 100})
    const cancelTimeout = result.current
    cancelTimeout()
    jest.advanceTimersByTime(150)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should cancel the timeout on unmount', () => {
    const callbackMock = jest.fn()
    const {unmount} = setUp({callback: callbackMock, delay: 100})
    unmount()
    jest.advanceTimersByTime(150)
    expect(callbackMock).not.toHaveBeenCalled()
  })

  it('should reset the timeout on delay change', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock, delay: 100})
    jest.advanceTimersByTime(50)
    rerender({callback: callbackMock, delay: 150})
    jest.advanceTimersByTime(200)
    expect(callbackMock).toHaveBeenCalledTimes(1)
    rerender({callback: callbackMock, delay: 200})
    jest.advanceTimersByTime(250)
    expect(callbackMock).toHaveBeenCalledTimes(2)
  })

  it('should reset the timeout on callback change', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock, delay: 100})
    jest.advanceTimersByTime(50)
    expect(callbackMock).toHaveBeenCalledTimes(0)
    const newCallbackMock = jest.fn()
    rerender({callback: newCallbackMock, delay: 100})
    jest.advanceTimersByTime(150)
    expect(callbackMock).toHaveBeenCalledTimes(0)
    expect(newCallbackMock).toHaveBeenCalledTimes(1)
  })

  it('should return a memoized cancelTimeout callback', () => {
    const callbackMock = jest.fn()
    const {result, rerender} = setUp({callback: callbackMock, delay: 100})
    const cancelTimeout = result.current
    jest.advanceTimersByTime(150)
    rerender({callback: callbackMock, delay: 100})
    expect(result.current).toBe(cancelTimeout)
  })
})
