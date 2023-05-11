import {renderHook} from '@testing-library/react'
import useTimeout from './useTimeout'

const setUp = (callback, delay) =>
  renderHook(() => useTimeout(callback, delay))

describe('useTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should run the callback after the delay', () => {
    const mockCallback = jest.fn()
    const {result} = setUp(mockCallback, 100)
    expect(mockCallback).not.toHaveBeenCalled()
    expect(result.current).toBeInstanceOf(Function)
    jest.advanceTimersByTime(150)
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  it('should not set the timeout if delay is null', () => {
    const mockCallback = jest.fn()
    setUp(mockCallback, null)
    jest.advanceTimersByTime(50)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should not set the timeout if delay is not set', () => {
    const mockCallback = jest.fn()
    setUp(mockCallback)
    jest.advanceTimersByTime(50)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should cancel the timeout', () => {
    const mockCallback = jest.fn()
    const {result} = setUp(mockCallback, 100)
    const cancelTimeout = result.current
    cancelTimeout()
    jest.advanceTimersByTime(150)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should cancel the timeout on unmount', () => {
    const mockCallback = jest.fn()
    const {unmount} = setUp(mockCallback, 100)
    unmount()
    jest.advanceTimersByTime(150)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should return a memoized cancelTimeout callback', () => {
    const mockCallback = jest.fn()
    const {result, rerender} = setUp(mockCallback, 100)
    const cancelTimeout = result.current
    jest.advanceTimersByTime(150)
    rerender()
    expect(result.current).toBe(cancelTimeout)
  })
})
