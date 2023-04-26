import {act, renderHook} from '@testing-library/react'
import useSetState from './useSetState'

const setUp = (initialState) => renderHook(() => useSetState(initialState))

describe('useSetState', () => {
  it('should init state', () => {
    const {result} = setUp({count: 0})
    const [state, setState] = result.current

    expect(state).toEqual({count: 0})
    expect(setState).toBeInstanceOf(Function)
  })

  it('should merge changes into current state when providing object', () => {
    const {result} = setUp({someString: 'string', count: 1})
    const [state, setState] = result.current

    act(() => setState({count: state.count + 1, ok: true}))
    expect(result.current[0]).toEqual({someString: 'string', count: 2, ok: true})
  })

  it('should merge changes into current state when providing function', () => {
    const {result} = setUp({someString: 'string', count: 1})
    const [, setState] = result.current

    act(() => setState((prevState) => ({count: prevState.count + 1, ok: true})))
    expect(result.current[0]).toEqual({someString: 'string', count: 2, ok: true})
  })

  it('should return a memoized setState callback', () => {
    const {result, rerender} = setUp({ok: false})
    const [, setState0] = result.current

    act(() => setState0({ok: true}))
    rerender()

    const [, setState] = result.current
    expect(setState0).toBe(setState)
  })
})
