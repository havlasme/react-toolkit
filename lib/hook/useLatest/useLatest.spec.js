import {renderHook} from '@testing-library/react'
import useLatest from './useLatest'

const setUp = ({value}) => renderHook(
  ({value}) => useLatest(value),
  {
    initialProps: {value},
  },
)

describe('useLatest', () => {
  it('should return a ref object with an initial value', () => {
    const {result} = setUp({value: 0})
    expect(result.current).toEqual({current: 0})
  })

  it('should update the ref value when a new value is passed in', () => {
    const {result, rerender} = setUp({value: 0})
    expect(result.current).toEqual({current: 0})
    rerender({value: 2})
    expect(result.current).toEqual({current: 2})
    rerender({value: 4})
    expect(result.current).toEqual({current: 4})
    rerender({value: 6})
    expect(result.current).toEqual({current: 6})
  })
})
