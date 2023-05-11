import {fireEvent, renderHook} from '@testing-library/react'
import useFullScreen from './useFullScreen'

const targetElement = document.createElement('div')

const setUp = () =>
  renderHook(() => useFullScreen())

describe('useFullScreen', () => {
  beforeEach(() => {
    HTMLElement.prototype.requestFullscreen = jest.fn(() => {
      document.fullscreenElement = targetElement
      fireEvent(document, new Event('fullscreenchange'))
      return Promise.resolve()
    })
    document.exitFullscreen = jest.fn(() => {
      document.fullscreenElement = null
      fireEvent(document, new Event('fullscreenchange'))
      return Promise.resolve()
    })
  })

  it('should initialize state to false and return request and exit callback', () => {
    const {result} = setUp()
    expect(result.current[1]).toBe(false)
    expect(result.current[2]).toBeInstanceOf(Function)
    expect(result.current[3]).toBeInstanceOf(Function)
  })

  it('should request fullscreen and set state to true', () => {
    const {result} = setUp()
    const [element, , requestFullScreen] = result.current
    element.current = targetElement
    requestFullScreen()
    expect(HTMLElement.prototype.requestFullscreen).toHaveBeenCalled()
    expect(document.fullscreenElement).toBe(result.current[0].current)
    expect(result.current[1]).toBe(true)
  })

  it('should exit fullscreen and set state to false', () => {
    const {result} = setUp()
    const [element, , requestFullScreen, exitFullScreen] = result.current
    element.current = targetElement
    requestFullScreen()
    expect(HTMLElement.prototype.requestFullscreen).toHaveBeenCalled()
    expect(result.current[0].current).toBe(document.fullscreenElement)
    expect(result.current[1]).toBe(true)
    exitFullScreen()
    expect(document.exitFullscreen).toHaveBeenCalled()
    expect(result.current[0].current).not.toBe(document.fullscreenElement)
    expect(result.current[1]).toBe(false)
  })

  it('should not exit fullscreen when different element is in fullscreen mode', () => {
    const {result} = setUp()
    const [element, , , exitFullScreen] = result.current
    targetElement.requestFullscreen()
    element.current = document.createElement('div')
    exitFullScreen()
    expect(document.exitFullscreen).not.toHaveBeenCalled()
    expect(result.current[1]).toBe(false)
  })
})
