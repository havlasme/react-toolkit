import suspensify from './suspensify'

describe('includes', () => {
  it('should throw an error when the promise is rejected', () => {
    const pendingPromise = new Promise(jest.fn())
    const suspended = suspensify(pendingPromise)

    expect(() => suspended.read()).toThrow(Promise)
  })
})
