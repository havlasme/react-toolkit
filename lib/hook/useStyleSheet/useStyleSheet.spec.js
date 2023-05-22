import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react'
import useStyleSheet from './useStyleSheet'

describe('useStyleSheet', () => {
  beforeEach(() => {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(
      stylesheet => void stylesheet.remove(),
    )
  })

  it('should create a stylesheet element with the correct location', () => {
    const location = 'https://example.com/stylesheet.css'
    renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    expect(stylesheet.rel).toBe('stylesheet')
  })

  it('should create a new link element when location changes', () => {
    let location = 'https://example.com/stylesheet.css'
    const {rerender} = renderHook(() => useStyleSheet(location))
    let stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    location = 'https://example.com/stylesheet2.css'
    rerender()
    stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
  })

  it('should assign optional attributes to link element', () => {
    const location = 'https://example.com/stylesheet.css'
    const attributes = {
      id: 'test-id',
      crossorigin: true,
    }
    renderHook(() => useStyleSheet(location, {attributes}))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet.id).toBe(attributes.id)
    expect(stylesheet.crossorigin).toBe(attributes.crossorigin)
  })

  it('should return null when location is not a string', () => {
    const {result} = renderHook(() => useStyleSheet(null))
    expect(result.current).toBeNull()
  })
})
