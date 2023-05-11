import {renderHook} from '@testing-library/react'
import useInterval from './useInterval'

const setUp = (callback, delay) =>
  renderHook(() => useInterval(callback, delay))

describe('useInterval', () => {
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
    jest.advanceTimersByTime(200)
    expect(callback).toHaveBeenCalledTimes(3)
  })

  it('should not set the interval if delay is null', () => {
    const callback = jest.fn()
    setUp(callback, null)
    jest.advanceTimersByTime(50)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should not set the interval if delay is not set', () => {
    const callback = jest.fn()
    setUp(callback)
    jest.advanceTimersByTime(50)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should cancel the interval', () => {
    const callback = jest.fn()
    const {result} = setUp(callback, 100)
    const cancelInterval = result.current
    cancelInterval()
    jest.advanceTimersByTime(150)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should cancel the interval after running', () => {
    const callback = jest.fn()
    const {result} = setUp(callback, 100)
    const cancelInterval = result.current
    jest.advanceTimersByTime(250)
    expect(callback).toHaveBeenCalledTimes(2)
    cancelInterval()
    jest.advanceTimersByTime(200)
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should cancel the interval on unmount', () => {
    const callback = jest.fn()
    const {unmount} = setUp(callback, 100)
    jest.advanceTimersByTime(150)
    expect(callback).toHaveBeenCalledTimes(1)
    unmount()
    jest.advanceTimersByTime(200)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should return a memoized cancelInterval callback', () => {
    const callback = jest.fn()
    const {result, rerender} = setUp(callback, 100)
    const cancelInterval = result.current
    jest.advanceTimersByTime(150)
    rerender()
    expect(result.current).toBe(cancelInterval)
  })
})
