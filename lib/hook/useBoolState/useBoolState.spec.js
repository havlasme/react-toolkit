import {act, renderHook} from '@testing-library/react'
import useBoolState from './useBoolState'

const setUp = initialState => renderHook(() => useBoolState(initialState))

describe('useBoolState', () => {
  it('should init state to true', () => {
    const {result} = setUp(true)

    expect(result.current[0]).toBe(true)
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should init state to false', () => {
    const {result} = setUp(false)

    expect(result.current[0]).toBe(false)
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should set state to true', () => {
    const {result} = setUp(false)
    const [, setState] = result.current

    expect(result.current[0]).toBe(false)

    act(() => setState(true))
    expect(result.current[0]).toBe(true)

    act(() => setState(true))
    expect(result.current[0]).toBe(true)
  })

  it('should set state to false', () => {
    const {result} = setUp(true)
    const [, setState] = result.current

    expect(result.current[0]).toBe(true)

    act(() => setState(false))
    expect(result.current[0]).toBe(false)

    act(() => setState(false))
    expect(result.current[0]).toBe(false)
  })

  it('should toggle state to true', () => {
    const {result} = setUp(false)
    const [, setState] = result.current

    expect(result.current[0]).toBe(false)

    act(() => setState())
    expect(result.current[0]).toBe(true)
  })

  it('should toggle state to false', () => {
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
    const [, setState0] = result.current

    act(() => setState0(false))
    rerender()

    const [, setState] = result.current
    expect(setState0).toBe(setState)
  })
})
