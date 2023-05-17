import {act, renderHook, waitFor} from '@testing-library/react'
import useRequest from './useRequest'

const setUp = (request) =>
  renderHook(() => useRequest(request))

describe('useRequest', () => {
  it('should initialize state correctly', () => {
    const {result} = setUp(() => Promise.resolve())
    expect(result.current[0].exception).toBeNull()
    expect(result.current[0].fetching).toBe(false)
    expect(result.current[0].initialized).toBe(false)
    expect(result.current[0].loading).toBe(false)
    expect(result.current[0].ok).toBe(false)
    expect(result.current[0].response).toBeNull()
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  it('should update state correctly on successful request', async () => {
    const response = {data: 'example'}
    const requestMock = jest.fn().mockResolvedValue(response)
    const {result} = setUp(requestMock)
    const [, dispatch] = result.current
    act(() => void dispatch())
    expect(result.current[0].exception).toBeNull()
    expect(result.current[0].fetching).toBe(true)
    expect(result.current[0].initialized).toBe(false)
    expect(result.current[0].loading).toBe(true)
    expect(result.current[0].ok).toBe(false)
    expect(result.current[0].response).toBeNull()
    await waitFor(() => void expect(result.current[0].fetching).toBe(false))
    expect(result.current[0].exception).toBeNull()
    expect(result.current[0].initialized).toBe(true)
    expect(result.current[0].loading).toBe(false)
    expect(result.current[0].ok).toBe(true)
    expect(result.current[0].response).toBe(response)
    expect(requestMock).toHaveBeenCalledTimes(1)
  })

  it('should update state correctly on failed request', async () => {
    const error = {message: 'Request failed', response: {status: 500}}
    const requestMock = jest.fn().mockRejectedValue(error)
    const {result} = setUp(requestMock)
    const [, dispatch] = result.current
    act(() => void dispatch())
    expect(result.current[0].exception).toBeNull()
    expect(result.current[0].fetching).toBe(true)
    expect(result.current[0].initialized).toBe(false)
    expect(result.current[0].loading).toBe(true)
    expect(result.current[0].ok).toBe(false)
    expect(result.current[0].response).toBeNull()
    await waitFor(() => void expect(result.current[0].fetching).toBe(false))
    expect(result.current[0].exception).toBe(error)
    expect(result.current[0].initialized).toBe(true)
    expect(result.current[0].loading).toBe(false)
    expect(result.current[0].ok).toBe(false)
    expect(result.current[0].response).toBe(error.response)
    expect(requestMock).toHaveBeenCalledTimes(1)
  })

  test('should not set loading to true on consecutive dispatch', async () => {
    const response = {data: 'example'}
    const requestMock = jest.fn().mockResolvedValue(response)
    const {result} = setUp(requestMock)
    const [, dispatch] = result.current
    act(() => void dispatch())
    expect(result.current[0].fetching).toBe(true)
    expect(result.current[0].loading).toBe(true)
    await waitFor(() => void expect(result.current[0].fetching).toBe(false))
    act(() => void dispatch())
    expect(result.current[0].fetching).toBe(true)
    expect(result.current[0].loading).toBe(false)
    await waitFor(() => void expect(result.current[0].fetching).toBe(false))
    expect(requestMock).toHaveBeenCalledTimes(2)
  })

  it('should return a memoized dispatch callback', async () => {
    const {result, rerender} = setUp(() => Promise.resolve())
    const [, dispatch] = result.current
    rerender()
    expect(result.current[1]).toBe(dispatch)
    act(() => void dispatch())
    await waitFor(() => void expect(result.current[0].fetching).toBe(false))
    expect(result.current[1]).toBe(dispatch)
  })
})
