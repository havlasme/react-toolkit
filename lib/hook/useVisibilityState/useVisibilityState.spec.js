import {fireEvent, renderHook} from '@testing-library/react'
import useVisibilityState from './useVisibilityState'

const setUp = ({callback}) => renderHook(
  ({callback}) => useVisibilityState(callback),
  {
    initialProps: {callback},
  },
)

describe('useVisibilityState', () => {
  function doSetVisibilityState (state) {
    jest.spyOn(document, 'visibilityState', 'get').mockReturnValue(state)
    fireEvent(document, new Event('visibilitychange'))
  }

  it('should return an initial snapshot of the visibility state', () => {
    const {result} = setUp({})
    expect(result.current).toBe('visible')
  })

  it('should update the state on visibilitychange event', () => {
    const {result} = setUp({})
    expect(result.current).toBe('visible')
    doSetVisibilityState('visible')
    expect(result.current).toBe('visible')
    doSetVisibilityState('hidden')
    expect(result.current).toBe('hidden')
    doSetVisibilityState('visible')
    expect(result.current).toBe('visible')
  })

  it('should run the callback on visibilitychange event', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    doSetVisibilityState('visible')
    expect(callbackMock).toHaveBeenLastCalledWith(expect.any(Event), 'visible')
    doSetVisibilityState('hidden')
    expect(callbackMock).toHaveBeenLastCalledWith(expect.any(Event), 'hidden')
  })

  it('should run only the latest callback', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock})
    const newCallbackMock = jest.fn()
    rerender({callback: newCallbackMock})
    doSetVisibilityState('visible')
    expect(callbackMock).not.toHaveBeenCalled()
    expect(newCallbackMock).toHaveBeenCalledTimes(1)
  })

  it('should throw an error if the callback argument is not a function|null', () => {
    expect(() => useVisibilityState('string')).toThrow(TypeError)
    expect(() => useVisibilityState(1)).toThrow(TypeError)
    expect(() => useVisibilityState(true)).toThrow(TypeError)
    expect(() => useVisibilityState([])).toThrow(TypeError)
    expect(() => useVisibilityState({})).toThrow(TypeError)
  })
})
