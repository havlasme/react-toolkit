import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react'
import useScript from './useScript'

describe('useScript', () => {
  beforeEach(() => {
    document.querySelectorAll('script').forEach(
      script => void script.remove(),
    )
  })

  it('should create a script element with the correct location', () => {
    const location = 'https://example.com/script.js'
    renderHook(() => useScript(location))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
  })

  it('should create a new script element when location changes', () => {
    let location = 'https://example.com/script.js'
    const {rerender} = renderHook(() => useScript(location))
    let script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
    location = 'https://example.com/script2.js'
    rerender()
    script = document.querySelector(`script[src="${location}"]`)
    expect(script).toBeInTheDocument()
  })

  it('should assign optional attributes to script element', () => {
    const location = 'https://example.com/script.js'
    const attributes = {
      id: 'test-id',
      noModule: true,
    }
    renderHook(() => useScript(location, {attributes}))
    const script = document.querySelector(`script[src="${location}"]`)
    expect(script.id).toBe(attributes.id)
    expect(script.noModule).toBe(attributes.noModule)
  })

  it('should return null when location is not a string', () => {
    const {result} = renderHook(() => useScript(null))
    expect(result.current).toBeNull()
  })
})
