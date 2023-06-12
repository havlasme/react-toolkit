import {act, fireEvent, renderHook} from '@testing-library/react'
import useFullScreen from './useFullScreen'

const setUp = ({domNodeRef}) => renderHook(
  ({domNodeRef}) => useFullScreen(domNodeRef),
  {
    initialProps: {domNodeRef},
  },
)

describe('useFullScreen', () => {
  const domNode = document.createElement('div')

  beforeEach(() => {
    HTMLElement.prototype.requestFullscreen = jest.fn(() => {
      document.fullscreenElement = domNode
      fireEvent(document, new Event('fullscreenchange'))
      return Promise.resolve()
    })
    document.exitFullscreen = jest.fn(() => {
      document.fullscreenElement = null
      fireEvent(document, new Event('fullscreenchange'))
      return Promise.resolve()
    })
  })

  it('should initialize state to false and return request and exit function', () => {
    const domNodeRef = {current: domNode}
    const {result} = setUp({domNodeRef})
    expect(result.current[0]).toBe(false)
    expect(result.current[1]).toBeInstanceOf(Function)
    expect(result.current[2]).toBeInstanceOf(Function)
  })

  it('should request fullscreen and set the state to true', () => {
    const domNodeRef = {current: domNode}
    const {result} = setUp({domNodeRef})
    const [, requestFullScreen] = result.current
    act(() => void requestFullScreen())
    expect(HTMLElement.prototype.requestFullscreen).toHaveBeenCalled()
    expect(result.current[0]).toBe(true)
  })

  it('should exit fullscreen and set the state to false', () => {
    const domNodeRef = {current: domNode}
    const {result} = setUp({domNodeRef})
    const [, requestFullScreen, exitFullScreen] = result.current
    act(() => void requestFullScreen())
    expect(HTMLElement.prototype.requestFullscreen).toHaveBeenCalled()
    expect(result.current[0]).toBe(true)
    act(() => void exitFullScreen())
    expect(document.exitFullscreen).toHaveBeenCalled()
    expect(result.current[0]).toBe(false)
  })

  it('should not exit fullscreen if domNode is not in fullscreen', () => {
    const domNodeRef = {current: document.createElement('div')}
    const {result} = setUp({domNodeRef})
    const [, , exitFullScreen] = result.current
    expect(result.current[0]).toBe(false)
    domNode.requestFullscreen()
    act(() => void exitFullScreen())
    expect(document.exitFullscreen).not.toHaveBeenCalled()
  })

  it('should memoize the requestFullScreen function', () => {
    const domNodeRef = {current: domNode}
    const {result, rerender} = setUp({domNodeRef})
    const [, requestFullScreen] = result.current
    rerender({domNodeRef})
    expect(result.current[1]).toBe(requestFullScreen)
  })

  it('should memoize the exitFullScreen function', () => {
    const domNodeRef = {current: domNode}
    const {result, rerender} = setUp({domNodeRef})
    const [, , exitFullScreen] = result.current
    rerender({domNodeRef})
    expect(result.current[2]).toBe(exitFullScreen)
  })

  it('should throw an error if the domNodeRef argument is not an object', () => {
    expect(() => useFullScreen('string')).toThrow(TypeError)
    expect(() => useFullScreen(1)).toThrow(TypeError)
    expect(() => useFullScreen(true)).toThrow(TypeError)
    expect(() => useFullScreen(void 0)).toThrow(TypeError)
    expect(() => useFullScreen(null)).toThrow(TypeError)
  })
})
