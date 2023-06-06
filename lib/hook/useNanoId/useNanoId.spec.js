import {renderHook} from '@testing-library/react'
import useNanoId from './useNanoId'

const setUp = ({id}) => renderHook(
  ({id}) => useNanoId(id),
  {
    initialProps: {id},
  },
)

describe('useNanoId', () => {
  it('should return a new nanoid when no id is provided', () => {
    const {result} = setUp({})
    expect(typeof result.current).toBe('string')
  })

  it('should return the provided id when it is not null', () => {
    const {result} = setUp({id: 'custom-id'})
    expect(result.current).toBe('custom-id')
  })

  it('should return the same nanoid on subsequent render', () => {
    const {result, rerender} = setUp({})
    const nanoid = result.current
    rerender({})
    expect(result.current).toBe(nanoid)
  })

  it('should return different nanoid on independent instance', () => {
    const {result: result1} = setUp({})
    const {result: result2} = setUp({})
    expect(result1.current).not.toBe(result2.current)
  })
})
