import {act, renderHook} from '@testing-library/react'
import React from 'react'
import CacheContext from './CacheContext'
import useCache from './useCache'

const setUp = (key, cacheMock, signalMock) =>
  renderHook(() => useCache(key), {
    wrapper: ({children}) => (
      <CacheContext.Provider value={[cacheMock, signalMock]}>
        {children}
      </CacheContext.Provider>
    ),
  })

describe('useCache', () => {
  let cacheMock
  let signalMock

  beforeEach(() => {
    cacheMock = {
      get: jest.fn(),
      set: jest.fn(),
    }
    signalMock = {
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
      publish: jest.fn(),
    }
  })

  it('should initialize state with a cached value', () => {
    const key = 'test-key'
    const initialValue = 'test-value'
    cacheMock.get = jest.fn().mockReturnValue(initialValue)
    const {result} = setUp(key, cacheMock, signalMock)
    expect(result.current[0]).toBe(initialValue)
    expect(result.current[1]).toBeInstanceOf(Function)
    expect(cacheMock.get).toHaveBeenCalledWith(key)
  })

  it('should call set at the cache on setState', () => {
    const key = 'test-key'
    const newValue = 'new-value'
    const {result} = setUp(key, cacheMock, signalMock)
    const [, setState] = result.current
    act(() => void setState(newValue))
    expect(cacheMock.set).toHaveBeenCalledWith(key, newValue)
  })

  it('should call subscribe at the signal on mount', () => {
    const key = 'test-key'
    setUp(key, cacheMock, signalMock)
    expect(signalMock.subscribe).toHaveBeenCalledWith(key, expect.any(Function))
  })

  it('should call publish at the signal on setState', () => {
    const key = 'test-key'
    const {result} = setUp(key, cacheMock, signalMock)
    const [, setState] = result.current
    const newValue = 'newValue'
    act(() => void setState(newValue))
    expect(signalMock.publish).toHaveBeenCalledWith(key, newValue)
  })

  it('should call unsubscribe at the signal on unmount', () => {
    const key = 'test-key'
    const {unmount} = setUp(key, cacheMock, signalMock)
    act(() => void unmount())
    expect(signalMock.unsubscribe).toHaveBeenCalledWith(key, expect.any(Function))
  })

  it('should return a memoized setState callback', () => {
    const {result, rerender} = setUp('test-key', cacheMock, signalMock)
    const [, setState] = result.current
    act(() => setState(false))
    rerender()
    expect(result.current[1]).toBe(setState)
  })

  it('should throw an error if the key argument is not a string', () => {
    expect(() => useCache(123)).toThrow(TypeError)
    expect(() => useCache(true)).toThrow(TypeError)
    expect(() => useCache(void 0)).toThrow(TypeError)
    expect(() => useCache(null)).toThrow(TypeError)
    expect(() => useCache([])).toThrow(TypeError)
    expect(() => useCache({})).toThrow(TypeError)
  })
})
