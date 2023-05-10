import '@testing-library/jest-dom'
import {fireEvent, renderHook} from '@testing-library/react'
import useStyleSheet from './useStyleSheet'

describe('useStyleSheet', () => {
  beforeEach(() => {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(
      stylesheet => void stylesheet.remove(),
    )
  })

  it('should create a stylesheet element with the correct location and set state to "loading"', () => {
    const location = 'https://example.com/stylesheet.css'
    const {result} = renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    expect(stylesheet.dataset.state).toBe('loading')
    expect(result.current).toBe('loading')
  })

  it('should update state to "ready" when stylesheet is loaded', () => {
    const location = 'https://example.com/stylesheet.css'
    const {result} = renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    fireEvent(stylesheet, new Event('load'))
    expect(stylesheet.dataset.state).toBe('ready')
    expect(result.current).toBe('ready')
  })

  it('should update state to "error" when stylesheet failed to load', () => {
    const location = 'https://example.com/nonexistent.js'
    const {result} = renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    fireEvent(stylesheet, new Event('error'))
    expect(stylesheet.dataset.state).toBe('error')
    expect(result.current).toBe('error')
  })

  it('should increment and decrement the reference count correctly', () => {
    const location = 'https://example.com/stylesheet.css'
    const {unmount} = renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet.dataset.referenced).toBe('1')
    const {rerender} = renderHook(() => useStyleSheet(location))
    expect(stylesheet.dataset.referenced).toBe('2')
    rerender()
    rerender()
    expect(stylesheet.dataset.referenced).toBe('2')
    unmount()
    expect(stylesheet.dataset.referenced).toBe('1')
  })

  it('should not remove the stylesheet element while an active reference exists', () => {
    const location = 'https://example.com/stylesheet.css'
    const {unmount} = renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    renderHook(() => useStyleSheet(location))
    unmount()
    expect(stylesheet).toBeInTheDocument()
  })

  it('should remove the stylesheet element on unmount when destroyOnUnmount is true', () => {
    const location = 'https://example.com/stylesheet.css'
    const {unmount} = renderHook(() => useStyleSheet(location))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    unmount()
    expect(stylesheet).not.toBeInTheDocument()
  })

  it('should not remove the stylesheet element on unmount when destroyOnUnmount is false', () => {
    const location = 'https://example.com/stylesheet.css'
    const {unmount} = renderHook(() => useStyleSheet(location, {destroyOnUnmount: false}))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    unmount()
    expect(stylesheet).toBeInTheDocument()
  })

  it('should create a new stylesheet element when location changed', () => {
    let location = 'https://example.com/stylesheet.css'
    const {result, rerender} = renderHook(() => useStyleSheet(location))
    let stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    expect(stylesheet.dataset.state).toBe('loading')
    expect(result.current).toBe('loading')
    location = 'https://example.com/stylesheet2.css'
    rerender()
    stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet).toBeInTheDocument()
    expect(stylesheet.dataset.state).toBe('loading')
    expect(result.current).toBe('loading')
  })

  it('should assign additional property to stylesheet element', () => {
    const location = 'https://example.com/stylesheet.css'
    const property = {
      id: 'test-id',
      noModule: true,
    }
    renderHook(() => useStyleSheet(location, {stylesheet: property}))
    const stylesheet = document.querySelector(`link[href="${location}"]`)
    expect(stylesheet.id).toBe(property.id)
    expect(stylesheet.noModule).toBe(property.noModule)
  })

  it('should return null when location is not a string', () => {
    const {result} = renderHook(() => useStyleSheet(null))
    expect(result.current).toBeNull()
  })
})
