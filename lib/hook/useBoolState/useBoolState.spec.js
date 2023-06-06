import {act, renderHook} from '@testing-library/react'
import useBoolState from './useBoolState'

const setUp = ({initialState}) => renderHook(
  ({initialState}) => useBoolState(initialState),
  {
    initialProps: {initialState},
  },
)

describe('useBoolState', () => {
  it('should return an initial state and update function', () => {
    const {result} = setUp({initialState: true})
    expect(result.current[0]).toBe(true)
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should initialize the state using a function', () => {
    const initialStateCallbackMock = jest.fn(() => false)
    const {result} = setUp({initialState: initialStateCallbackMock})
    expect(result.current[0]).toBe(false)
    expect(initialStateCallbackMock).toHaveBeenCalled()
  })

  it('should set the state to true', () => {
    const {result} = setUp({initialState: false})
    const [, setState] = result.current
    expect(result.current[0]).toBe(false)
    act(() => void setState(true))
    expect(result.current[0]).toBe(true)
    act(() => void setState(true))
    expect(result.current[0]).toBe(true)
  })

  it('should set the state to false', () => {
    const {result} = setUp({initialState: true})
    const [, setState] = result.current
    expect(result.current[0]).toBe(true)
    act(() => void setState(false))
    expect(result.current[0]).toBe(false)
    act(() => void setState(false))
    expect(result.current[0]).toBe(false)
  })

  it('should toggle the state from false to true', () => {
    const {result} = setUp({initialState: false})
    const [, setState] = result.current
    expect(result.current[0]).toBe(false)
    act(() => void setState())
    expect(result.current[0]).toBe(true)
  })

  it('should toggle the state from true to false', () => {
    const {result} = setUp({initialState: true})
    const [, setState] = result.current
    expect(result.current[0]).toBe(true)
    act(() => void setState())
    expect(result.current[0]).toBe(false)
  })

  it('should discard a non-boolean argument and toggle the state', () => {
    const {result} = setUp({initialState: true})
    const [, setState] = result.current
    expect(result.current[0]).toBe(true)
    act(() => void setState('string'))
    expect(result.current[0]).toBe(false)
    act(() => void setState(1))
    expect(result.current[0]).toBe(true)
    act(() => void setState([]))
    expect(result.current[0]).toBe(false)
  })

  it('should set the state to a boolean value returned from a function', () => {
    const setStateCallbackMock = jest.fn(() => true)
    const {result} = setUp({initialState: false})
    const [, setState] = result.current
    expect(result.current[0]).toBe(false)
    act(() => void setState(setStateCallbackMock))
    expect(result.current[0]).toBe(true)
    act(() => void setState(setStateCallbackMock))
    expect(result.current[0]).toBe(true)
  })

  it('should discard a non-boolean value returned from a function and toggle the state', () => {
    const setStateCallbackMock = jest.fn(() => 'non-boolean')
    const {result} = setUp({initialState: false})
    const [, setState] = result.current
    expect(result.current[0]).toBe(false)
    act(() => void setState(setStateCallbackMock))
    expect(result.current[0]).toBe(true)
    act(() => void setState(setStateCallbackMock))
    expect(result.current[0]).toBe(false)
  })

  it('should memoize the setState function', () => {
    const {result, rerender} = setUp({initialState: true})
    const [, setState] = result.current
    act(() => void setState(false))
    expect(result.current[1]).toBe(setState)
    rerender({initialState: true})
    expect(result.current[1]).toBe(setState)
  })

  it('should throw an error if the initialState argument is not a boolean|function', () => {
    expect(() => useBoolState('string')).toThrow(TypeError)
    expect(() => useBoolState(1)).toThrow(TypeError)
    expect(() => useBoolState(null)).toThrow(TypeError)
    expect(() => useBoolState([])).toThrow(TypeError)
    expect(() => useBoolState({})).toThrow(TypeError)
    expect(() => useBoolState()).toThrow(TypeError)
  })
})
