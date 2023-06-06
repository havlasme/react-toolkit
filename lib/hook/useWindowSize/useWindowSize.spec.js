import {fireEvent, renderHook} from '@testing-library/react'
import useWindowSize from './useWindowSize'

const setUp = ({callback}) => renderHook(
  ({callback}) => useWindowSize(callback),
  {
    initialProps: {callback},
  },
)

describe('useWindowSize', () => {
  function doWindowResize (dimension, value) {
    if (dimension === 'width') {
      global.innerWidth = value
    } else if (dimension === 'height') {
      global.innerHeight = value
    }
    fireEvent(window, new Event('resize'))
  }

  it('should return an initial snapshot of the window size', () => {
    const {result} = setUp({})
    expect(result.current).toBeInstanceOf(Object)
    expect(result.current.height).toBe(global.innerHeight)
    expect(result.current.width).toBe(global.innerWidth)
  })

  it('should update the window height on resize event', () => {
    const {result} = setUp({})
    doWindowResize('height', 360)
    expect(result.current.height).toBe(360)
    doWindowResize('height', 2048)
    expect(result.current.height).toBe(2048)
  })

  it('should update the window width on resize event', () => {
    const {result} = setUp({})
    doWindowResize('width', 360)
    expect(result.current.width).toBe(360)
    doWindowResize('width', 2048)
    expect(result.current.width).toBe(2048)
  })

  it('should run the callback on resize event', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    doWindowResize('width', 360)
    expect(callbackMock).toHaveBeenCalledWith(expect.any(Event), {height: global.innerHeight, width: 360})
  })

  it('should run only the latest callback', () => {
    const callbackMock = jest.fn()
    const {rerender} = setUp({callback: callbackMock})
    const newCallbackMock = jest.fn()
    rerender({callback: newCallbackMock})
    doWindowResize('width', 360)
    expect(callbackMock).not.toHaveBeenCalled()
    expect(newCallbackMock).toHaveBeenCalledTimes(1)
  })

  it('should memoize the state object', () => {
    const {rerender, result} = setUp({})
    const initialState = result.current
    rerender({})
    expect(result.current).toBe(initialState)
  })

  it('should throw an error if the callback argument is not a function|null', () => {
    expect(() => useWindowSize('string')).toThrow(TypeError)
    expect(() => useWindowSize(1)).toThrow(TypeError)
    expect(() => useWindowSize(true)).toThrow(TypeError)
    expect(() => useWindowSize([])).toThrow(TypeError)
    expect(() => useWindowSize({})).toThrow(TypeError)
  })
})
