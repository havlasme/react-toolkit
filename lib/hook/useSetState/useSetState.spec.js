import {act, renderHook} from '@testing-library/react'
import useSetState from './useSetState'

const setUp = ({initialState}) => renderHook(
  ({initialState}) => useSetState(initialState),
  {
    initialProps: {initialState},
  },
)

describe('useSetState', () => {
  it('should return an initial state and state update function', () => {
    const {result} = setUp({initialState: {count: 0}})
    expect(result.current[0]).toEqual({count: 0})
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should initialize the state to an empty object by default', () => {
    const {result} = setUp({})
    expect(result.current[0]).toEqual({})
  })

  it('should initialize state using a function', () => {
    const initialStateCallbackMock = jest.fn(() => ({count: 0}))
    const {result} = setUp({initialState: initialStateCallbackMock})
    expect(result.current[0]).toEqual({count: 0})
    expect(initialStateCallbackMock).toHaveBeenCalled()
  })

  it('should merge the new state into the previous state', () => {
    const {result} = setUp({initialState: {text: 'test text', count: 1}})
    const [, setState] = result.current
    act(() => void setState({text: 'updated text', ok: true}))
    expect(result.current[0]).toEqual({text: 'updated text', count: 1, ok: true})
  })

  it('should merge the state returned from a function into the previous state', () => {
    const {result} = setUp({initialState: {text: 'string', count: 1}})
    const [, setState] = result.current
    act(() => void setState((prevState) => ({count: prevState.count + 1, ok: true})))
    expect(result.current[0]).toEqual({text: 'string', count: 2, ok: true})
  })

  it('should memoize the setState function', () => {
    const {result, rerender} = setUp({initialState: {ok: false}})
    const [, setState] = result.current
    act(() => void setState({ok: true}))
    rerender({initialState: {ok: false}})
    expect(result.current[1]).toBe(setState)
  })

  it('should throw an error if the initialState is not an object', () => {
    expect(() => useSetState('string')).toThrow(TypeError)
    expect(() => useSetState(1)).toThrow(TypeError)
    expect(() => useSetState(true)).toThrow(TypeError)
  })
})
