import {renderHook} from '@testing-library/react'
import useTimeout from './useTimeout'

const setUp = (callback, delay) => renderHook(() => useTimeout(callback, delay))

describe('useTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should call the callback after the delay', () => {
    const callback = jest.fn()
    const {result} = setUp(callback, 100)

    expect(callback).not.toBeCalled()
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

    result.current()
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
})
