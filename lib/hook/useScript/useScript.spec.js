import '@testing-library/jest-dom'
import {fireEvent, renderHook} from '@testing-library/react'
import useScript from './useScript'

describe('useScript', () => {
  beforeEach(() => {
    document.querySelectorAll('script').forEach(
      script => void script.remove(),
    )
  })

  it('should create a script element with the correct location and set state to "loading"', () => {
    const location = 'https://example.com/script.js'
    const {result} = renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    expect(script.dataset.state).toBe('loading')
    expect(result.current).toBe('loading')
  })

  it('should update state to "ready" when script is loaded', () => {
    const location = 'https://example.com/script.js'
    const {result} = renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    fireEvent(script, new Event('load'))
    expect(script.dataset.state).toBe('ready')
    expect(result.current).toBe('ready')
  })

  it('should update state to "error" when script failed to load', () => {
    const location = 'https://example.com/nonexistent.js'
    const {result} = renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    fireEvent(script, new Event('error'))
    expect(script.dataset.state).toBe('error')
    expect(result.current).toBe('error')
  })

  it('should increment and decrement the reference count correctly', () => {
    const location = 'https://example.com/script.js'
    const {unmount} = renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script.dataset.referenced).toBe('1')
    const {rerender} = renderHook(() => useScript(location))
    expect(script.dataset.referenced).toBe('2')
    rerender()
    rerender()
    expect(script.dataset.referenced).toBe('2')
    unmount()
    expect(script.dataset.referenced).toBe('1')
  })

  it('should not remove the script element while an active reference exists', () => {
    const location = 'https://example.com/script.js'
    const {unmount} = renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    renderHook(() => useScript(location))
    unmount()
    expect(script).toBeInTheDocument()
  })

  it('should remove the script element on unmount when destroyOnUnmount is true', () => {
    const location = 'https://example.com/script.js'
    const {unmount} = renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    unmount()
    expect(script).not.toBeInTheDocument()
  })

  it('should not remove the script element on unmount when destroyOnUnmount is false', () => {
    const location = 'https://example.com/script.js'
    const {unmount} = renderHook(() => useScript(location, {destroyOnUnmount: false}))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    unmount()
    expect(script).toBeInTheDocument()
  })

  it('should create a new script element when location changed', () => {
    let location = 'https://example.com/script.js'
    const {result, rerender} = renderHook(() => useScript(location))
    let script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    expect(script.dataset.state).toBe('loading')
    expect(result.current).toBe('loading')
    location = 'https://example.com/script2.js'
    rerender()
    script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    expect(script.dataset.state).toBe('loading')
    expect(result.current).toBe('loading')
  })

  it('should assign additional property to script element', () => {
    const location = 'https://example.com/script.js'
    const property = {
      id: 'test-id',
      noModule: true,
    }
    renderHook(() => useScript(location, {script: property}))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script.id).toBe(property.id)
    expect(script.noModule).toBe(property.noModule)
  })

  it('should return null when location is not a string', () => {
    const {result} = renderHook(() => useScript(null))
    expect(result.current).toBeNull()
  })
})
