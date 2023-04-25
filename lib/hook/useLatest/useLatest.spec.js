import {renderHook} from '@testing-library/react'
import useLatest from './useLatest'

const setUp = (initialValue) => renderHook((state) => useLatest(state), {initialProps: initialValue})

describe('useLatest', () => {
  it('should return a ref with the latest value on initial render', () => {
    const {result} = setUp(0)

    expect(result.current).toEqual({current: 0})
  })

  it('should always return a ref with the latest value after each update', () => {
    const {result, rerender} = setUp(0)

    rerender(2)
    expect(result.current).toEqual({current: 2})

    rerender(4)
    expect(result.current).toEqual({current: 4})

    rerender(6)
    expect(result.current).toEqual({current: 6})
  })
})
