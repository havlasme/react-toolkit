import {act, renderHook} from '@testing-library/react'
import useObservable from './useObservable'

describe('useObservable', () => {
  let unsubscribeMock
  let observableMock

  beforeEach(() => {
    unsubscribeMock = jest.fn()
    observableMock = {
      next: jest.fn(),
      subscribe: jest.fn(() => ({
        unsubscribe: unsubscribeMock,
      })),
    }
  })

  it('should initialize state to initialState', () => {
    const initialState = 'initial state'
    const {result} = renderHook(() => useObservable(observableMock, initialState))
    expect(result.current[0]).toBe(initialState)
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should call observable.next when dispatch is called', () => {
    const nextState = 'dispatched state'
    const {result} = renderHook(() => useObservable(observableMock))
    const [, dispatch] = result.current
    act(() => void dispatch(nextState))
    expect(observableMock.next).toHaveBeenCalledWith(nextState)
  })

  it('should subscribe to the observable on component mount', () => {
    renderHook(() => useObservable(observableMock))
    expect(observableMock.subscribe).toHaveBeenCalled()
  })

  it('should unsubscribe from the observable on component unmount', () => {
    const {unmount} = renderHook(() => useObservable(observableMock))
    expect(unsubscribeMock).not.toHaveBeenCalled()
    act(() => void unmount())
    expect(unsubscribeMock).toHaveBeenCalled()
  })

  it('should subscribe to new observable', () => {
    const subscribeMock = jest.fn(() => ({unsubscribe: jest.fn()}))
    const {rerender} = renderHook((observable) => useObservable(observable), {
      initialProps: observableMock,
    })
    expect(observableMock.subscribe).toHaveBeenCalledTimes(1)
    expect(unsubscribeMock).not.toHaveBeenCalled()
    rerender({subscribe: subscribeMock})
    expect(unsubscribeMock).toHaveBeenCalledTimes(1)
    expect(subscribeMock).toHaveBeenCalledTimes(1)
  })

  it('should return a memoized dispatch callback', () => {
    const {result, rerender} = renderHook(() => useObservable(observableMock))
    const [, dispatch] = result.current
    act(() => void dispatch('dispatched value'))
    rerender()
    expect(result.current[1]).toBe(dispatch)
  })
})
