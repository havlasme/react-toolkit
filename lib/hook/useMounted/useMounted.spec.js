import {renderHook} from '@testing-library/react'
import useMounted from './useMounted'

const setUp = ({callback}) => renderHook(
  ({callback}) => useMounted(callback),
  {
    initialProps: {callback},
  },
)

describe('useMounted', () => {
  it('should return true when the component is mounted', () => {
    const {result} = setUp({})
    expect(result.current).toBe(true)
  })

  it('should run the callback when component is mounted', () => {
    const callbackMock = jest.fn()
    setUp({callback: callbackMock})
    expect(callbackMock).toHaveBeenCalledTimes(1)
  })

  it('should run the callback when the component is unmounted', () => {
    const callbackMock = jest.fn()
    const {unmount} = setUp({callback: () => callbackMock})
    expect(callbackMock).not.toHaveBeenCalled()
    unmount()
    expect(callbackMock).toHaveBeenCalledTimes(1)
  })
})
