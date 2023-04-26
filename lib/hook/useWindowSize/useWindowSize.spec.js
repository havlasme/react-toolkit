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

  it('should return current window size', () => {
    const {result} = setUp()

    expect(result.current).toBeInstanceOf(Object)
    expect(result.current.height).toBe(global.innerHeight)
    expect(result.current.width).toBe(global.innerWidth)
  })

  it('should re-render after height change', () => {
    const {result} = setUp()

    doWindowResize('height', 360)
    expect(result.current.height).toBe(360)

    doWindowResize('height', 2048)
    expect(result.current.height).toBe(2048)
  })

  it('should re-render after width change', () => {
    const {result} = setUp()

    doWindowResize('width', 360)
    expect(result.current.width).toBe(360)

    doWindowResize('width', 2048)
    expect(result.current.width).toBe(2048)
  })
})
