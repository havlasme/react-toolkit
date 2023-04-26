import focusEventTarget from './focusEventTarget'

describe('focusEventTarget', () => {
  it('should call focus on the current event target', () => {
    const mockEvent = {
      currentTarget: {
        focus: jest.fn(),
      },
    }

    focusEventTarget(mockEvent)
    expect(mockEvent.currentTarget.focus).toHaveBeenCalled()
  })
})
