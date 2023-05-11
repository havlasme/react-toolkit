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
    const callback = jest.fn()
    const {result} = setUp(callback, 100)
    expect(callback).not.toHaveBeenCalled()
    expect(result.current).toBeInstanceOf(Function)
    jest.advanceTimersByTime(150)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should not set the timeout if delay is null', () => {
    const callback = jest.fn()
    setUp(callback, null)
    jest.advanceTimersByTime(50)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should not set the timeout if delay is not set', () => {
    const callback = jest.fn()
    setUp(callback)
    jest.advanceTimersByTime(50)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should cancel the timeout', () => {
    const callback = jest.fn()
    const {result} = setUp(callback, 100)
    const cancelTimeout = result.current
    cancelTimeout()
    jest.advanceTimersByTime(150)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should cancel the timeout on unmount', () => {
    const callback = jest.fn()
    const {unmount} = setUp(callback, 100)
    unmount()
    jest.advanceTimersByTime(150)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should return a memoized cancelTimeout callback', () => {
    const callback = jest.fn()
    const {result, rerender} = setUp(callback, 100)
    const cancelTimeout = result.current
    jest.advanceTimersByTime(150)
    rerender()
    expect(result.current).toBe(cancelTimeout)
  })
})
