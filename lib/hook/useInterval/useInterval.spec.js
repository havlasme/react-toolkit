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
    const mockCallback = jest.fn()
    const {result} = setUp(mockCallback, 100)
    expect(mockCallback).not.toHaveBeenCalled()
    expect(result.current).toBeInstanceOf(Function)
    jest.advanceTimersByTime(150)
    expect(mockCallback).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(200)
    expect(mockCallback).toHaveBeenCalledTimes(3)
  })

  it('should not set the interval if delay is null', () => {
    const mockCallback = jest.fn()
    setUp(mockCallback, null)
    jest.advanceTimersByTime(50)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should not set the interval if delay is not set', () => {
    const mockCallback = jest.fn()
    setUp(mockCallback)
    jest.advanceTimersByTime(50)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should cancel the interval', () => {
    const mockCallback = jest.fn()
    const {result} = setUp(mockCallback, 100)
    const cancelInterval = result.current
    cancelInterval()
    jest.advanceTimersByTime(150)
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('should cancel the interval after running', () => {
    const mockCallback = jest.fn()
    const {result} = setUp(mockCallback, 100)
    const cancelInterval = result.current
    jest.advanceTimersByTime(250)
    expect(mockCallback).toHaveBeenCalledTimes(2)
    cancelInterval()
    jest.advanceTimersByTime(200)
    expect(mockCallback).toHaveBeenCalledTimes(2)
  })

  it('should cancel the interval on unmount', () => {
    const mockCallback = jest.fn()
    const {unmount} = setUp(mockCallback, 100)
    jest.advanceTimersByTime(150)
    expect(mockCallback).toHaveBeenCalledTimes(1)
    unmount()
    jest.advanceTimersByTime(200)
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  it('should return a memoized cancelInterval callback', () => {
    const mockCallback = jest.fn()
    const {result, rerender} = setUp(mockCallback, 100)
    const cancelInterval = result.current
    jest.advanceTimersByTime(150)
    rerender()
    expect(result.current).toBe(cancelInterval)
  })
})
