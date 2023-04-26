import tryParse from './tryParse'

describe('tryParse', () => {
  it('should parse a valid JSON string and return the result', () => {
    const result = tryParse('{"key": "value"}')

    expect(result).toEqual({key: 'value'})
  })

  it('should return the input value if it is not a valid JSON string', () => {
    const result = tryParse('not a JSON string')

    expect(result).toBe('not a JSON string')
  })

  it('should return the input value if it is a valid JSON string but not an object', () => {
    const result = tryParse('"not an object"')

    expect(result).toBe('"not an object"')
  })
})
