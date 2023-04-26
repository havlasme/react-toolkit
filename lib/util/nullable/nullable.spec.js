import nullable from './nullable'

describe('nullable', () => {
  it('should return null if toNull is true', () => {
    expect(nullable('some value', true)).toBeNull()
  })

  it('should return the original value if toNull is false', () => {
    expect(nullable('some value', false)).toBe('some value')
  })

  it('should return null by default if toNull is not provided', () => {
    expect(nullable('some value')).toBeNull()
  })
})
