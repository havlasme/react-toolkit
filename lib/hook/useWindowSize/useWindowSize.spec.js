import {fireEvent, renderHook} from '@testing-library/react'
import useWindowSize from './useWindowSize'

const setUp = () => renderHook(() => useWindowSize())

describe('useWindowSize', () => {
  function doWindowResize(dimension, value) {
    if (dimension === 'width') {
      global.innerWidth = value
    } else if (dimension === 'height') {
      global.innerHeight = value
    }

    fireEvent(window, new Event('resize'))
  }

  it('should return an object with window height and width', () => {
    const {result} = setUp()

    expect(result.current).toBeInstanceOf(Object)
    expect(result.current.height).toBe(global.innerHeight)
    expect(result.current.width).toBe(global.innerWidth)
  })

  it('should update the window size on resize', () => {
    const {result} = setUp()

    doWindowResize('height', 360)
    expect(result.current.height).toBe(360)

    doWindowResize('height', 2048)
    expect(result.current.height).toBe(2048)
  })

  it('should update the window size on resize', () => {
    const {result} = setUp()

    doWindowResize('width', 360)
    expect(result.current.width).toBe(360)

    doWindowResize('width', 2048)
    expect(result.current.width).toBe(2048)
  })

  it('should return the same object on subsequent renders when the window size has not changed', () => {
    const {rerender,result} = setUp()
    const initialState = result.current

    rerender()
    expect(result.current).toBe(initialState)
  })
})
