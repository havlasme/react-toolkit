import {act, renderHook} from '@testing-library/react'
import useBoolState from './useBoolState'

const setUp = (initialState) =>
  renderHook(() => useBoolState(initialState))

describe('useBoolState', () => {
  it('should initialize state to true', () => {
    const {result} = setUp(true)
    expect(result.current[0]).toBe(true)
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should initialize state to false', () => {
    const {result} = setUp(false)
    expect(result.current[0]).toBe(false)
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should set state from false to true', () => {
    const {result} = setUp(false)
    const [, setState] = result.current
    expect(result.current[0]).toBe(false)
    act(() => setState(true))
    expect(result.current[0]).toBe(true)
    act(() => setState(true))
    expect(result.current[0]).toBe(true)
  })

  it('should set state from true to false', () => {
    const {result} = setUp(true)
    const [, setState] = result.current
    expect(result.current[0]).toBe(true)
    act(() => setState(false))
    expect(result.current[0]).toBe(false)
    act(() => setState(false))
    expect(result.current[0]).toBe(false)
  })

  it('should toggle state from false to true', () => {
    const {result} = setUp(false)
    const [, setState] = result.current
    expect(result.current[0]).toBe(false)
    act(() => setState())
    expect(result.current[0]).toBe(true)
  })

  it('should toggle state from true to false', () => {
    const {result} = setUp(true)
    const [, setState] = result.current
    expect(result.current[0]).toBe(true)
    act(() => setState())
    expect(result.current[0]).toBe(false)
  })

  it('should ignore non-boolean argument and toggle state', () => {
    const {result} = setUp(true)
    const [, setState] = result.current
    act(() => setState('string'))
    expect(result.current[0]).toBe(false)
    act(() => setState([]))
    expect(result.current[0]).toBe(true)
  })

  it('should return a memoized setState callback', () => {
    const {result, rerender} = setUp(true)
    const [, setState] = result.current
    act(() => setState(false))
    rerender()
    expect(result.current[1]).toBe(setState)
  })

  it('should throw an error if the initialState argument is not a boolean', () => {
    expect(() => useBoolState('string')).toThrow(TypeError)
    expect(() => useBoolState(1)).toThrow(TypeError)
    expect(() => useBoolState(void 0)).toThrow(TypeError)
    expect(() => useBoolState(null)).toThrow(TypeError)
    expect(() => useBoolState([])).toThrow(TypeError)
    expect(() => useBoolState({})).toThrow(TypeError)
  })
})
