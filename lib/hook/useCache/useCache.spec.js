import {act, renderHook} from '@testing-library/react'
import React from 'react'
import CacheContext from './CacheContext'
import useCache from './useCache'

const setUp = ({key, initialState}, cacheMock) => renderHook(
  ({key, initialState}) => useCache(key, initialState),
  {
    initialProps: {key, initialState},
    wrapper: ({children}) => (
      <CacheContext.Provider value={cacheMock}>
        {children}
      </CacheContext.Provider>
    ),
  },
)

describe('useCache', () => {
  let cacheMock

  beforeEach(() => {
    cacheMock = {
      has: jest.fn(),
      get: jest.fn(),
      set: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    }
  })

  it('should return an initial state and update function', () => {
    const key = 'cache-key'
    cacheMock.has = jest.fn().mockReturnValue(false)
    cacheMock.get = jest.fn().mockReturnValue('test value')
    const {result} = setUp({key, initialState: 'test value'}, cacheMock)
    expect(result.current[0]).toBe('test value')
    expect(result.current[1]).toBeInstanceOf(Function)
    expect(cacheMock.has).toHaveBeenLastCalledWith(key)
    expect(cacheMock.set).toHaveBeenLastCalledWith(key, 'test value')
    expect(cacheMock.get).not.toHaveBeenCalledWith(key)
  })

  it('should initialize the state with an already cached value', () => {
    const key = 'cache-key'
    cacheMock.has = jest.fn().mockReturnValue(true)
    cacheMock.get = jest.fn().mockReturnValue('test value')
    const {result} = setUp({key}, cacheMock)
    expect(result.current[0]).toBe('test value')
    expect(cacheMock.has).toHaveBeenLastCalledWith(key)
    expect(cacheMock.get).toHaveBeenLastCalledWith(key)
    expect(cacheMock.set).not.toHaveBeenCalled()
  })

  it('should update the cached value on setState', () => {
    const key = 'cache-key'
    const {result} = setUp({key}, cacheMock)
    const [, setState] = result.current
    act(() => void setState('new value'))
    expect(cacheMock.set).toHaveBeenLastCalledWith(key, 'new value')
  })

  it('should subscribe the cache on mount', () => {
    const key = 'cache-key'
    setUp({key}, cacheMock)
    expect(cacheMock.subscribe).toHaveBeenLastCalledWith(key, expect.any(Function))
  })

  it('should unsubscribe the cache on unmount', () => {
    const key = 'cache-key'
    const {unmount} = setUp({key}, cacheMock)
    act(() => void unmount())
    expect(cacheMock.unsubscribe).toHaveBeenCalledWith(key, expect.any(Function))
  })

  it('should memoize the setState function', () => {
    const key = 'cache-key'
    const {result, rerender} = setUp({key}, cacheMock)
    const [, setState] = result.current
    act(() => void setState(false))
    rerender({key})
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
