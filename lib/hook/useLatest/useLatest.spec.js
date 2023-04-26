import {renderHook} from '@testing-library/react'
import useLatest from './useLatest'

const setUp = initialValue => renderHook((state) => useLatest(state), {initialProps: initialValue})

describe('useLatest', () => {
  it('should return a ref object with an initial value', () => {
    const {result} = setUp(0)

    expect(result.current).toEqual({current: 0})
  })

  it('should update the ref value when a new value is passed in', () => {
    const {result, rerender} = setUp(0)

    rerender(2)
    expect(result.current).toEqual({current: 2})

    rerender(4)
    expect(result.current).toEqual({current: 4})

    rerender(6)
    expect(result.current).toEqual({current: 6})
  })
})
