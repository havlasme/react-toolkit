import voidable from './voidable'

describe('voidable', () => {
  it('should return undefined if toVoid is true', () => {
    expect(voidable('some value', true)).toBeUndefined()
  })

  it('should return the original value if toVoid is false', () => {
    expect(voidable('some value', false)).toBe('some value')
  })

  it('should return undefined by default if toVoid is not provided', () => {
    expect(voidable('some value')).toBeUndefined()
  })
})
