import focusEventTarget from './focusEventTarget'

describe('focusEventTarget', () => {
  it('should call focus on the event target', () => {
    const mockEvent = {
      target: {
        focus: jest.fn(),
      },
    }

    focusEventTarget(mockEvent)
    expect(mockEvent.target.focus).toHaveBeenCalled()
  })
})
