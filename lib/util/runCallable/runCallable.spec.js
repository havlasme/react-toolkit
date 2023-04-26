import runCallable from './runCallable'

describe('runCallable', () => {
  it('should return the result of the callback if it is a function', () => {
    const callback = jest.fn((a, b) => a + b)
    const result = runCallable(callback, 2, 3)

    expect(result).toBe(5)
    expect(callback).toHaveBeenCalledWith(2, 3)
  })

  it('should return the callback if it is not a function', () => {
    const result = runCallable('not a function', 2, 3)

    expect(result).toBe('not a function')
  })
})
