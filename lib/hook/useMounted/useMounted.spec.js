import {renderHook} from '@testing-library/react'
import useMounted from './useMounted'

const setUp = callback => renderHook(() => useMounted(callback))

describe('useMounted', () => {
  it('should return true when the component is mounted', () => {
    const {result} = renderHook(() => useMounted())

    expect(result.current).toBe(true)
  })

  it('should call the callback function when the component is mounted', () => {
    const mockCallback = jest.fn()
    setUp(mockCallback)

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  it('should call the callback function when the component is unmounted', () => {
    const mockCallback = jest.fn()
    const {unmount} = setUp(() => mockCallback)

    expect(mockCallback).not.toHaveBeenCalled()

    unmount()
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
