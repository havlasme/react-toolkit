import '@testing-library/jest-dom'
import {fireEvent, renderHook} from '@testing-library/react'
import useExternal from './useExternal'

describe('useExternal', () => {
  beforeEach(() => {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(
      domNode => void domNode.remove(),
    )
  })

  it('should insert the domNode into the document head and set the state to "loading"', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    expect(domNode).not.toBeInTheDocument()
    const {result} = renderHook(() => useExternal(createDomNode))
    expect(createDomNode).toHaveBeenCalled()
    expect(domNode).toBeInTheDocument()
    expect(result.current).toBe('loading')
  })

  it('should update the state (attribute) to "ready" on load event', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    const {result} = renderHook(() => useExternal(createDomNode))
    expect(result.current).toBe('loading')
    fireEvent(domNode, new Event('load'))
    expect(result.current).toBe('ready')
    expect(domNode.dataset.state).toBe('ready')
  })

  it('should update the state (attribute) to "error" on error event', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    const {result} = renderHook(() => useExternal(createDomNode))
    expect(result.current).toBe('loading')
    fireEvent(domNode, new Event('error'))
    expect(result.current).toBe('error')
    expect(domNode.dataset.state).toBe('error')
  })

  it('should increment and decrement the reference count correctly', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    const {unmount} = renderHook(() => useExternal(createDomNode))
    expect(domNode.dataset.references).toBe('1')
    const {rerender} = renderHook(() => useExternal(createDomNode))
    expect(domNode.dataset.references).toBe('2')
    rerender()
    rerender()
    expect(domNode.dataset.references).toBe('2')
    unmount()
    expect(domNode.dataset.references).toBe('1')
  })

  it('should remove the domNode from the document head on unmount', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    const {unmount} = renderHook(() => useExternal(createDomNode))
    expect(domNode).toBeInTheDocument()
    unmount()
    expect(domNode).not.toBeInTheDocument()
  })

  it('should not remove the domNode from the document head on unmount if has any active reference', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    const {unmount} = renderHook(() => useExternal(createDomNode, {removeOnUnmount: false}))
    expect(domNode).toBeInTheDocument()
    renderHook(() => useExternal(createDomNode, {removeOnUnmount: false}))
    unmount()
    expect(domNode).toBeInTheDocument()
  })

  it('should not remove the domNode from the document head on unmount if removeOnUnmount is false', () => {
    const domNode = document.createElement('link')
    domNode.rel = 'stylesheet'
    const createDomNode = jest.fn(() => domNode)
    const {unmount} = renderHook(() => useExternal(createDomNode, {removeOnUnmount: false}))
    expect(domNode).toBeInTheDocument()
    unmount()
    expect(domNode).toBeInTheDocument()
  })

  it('should return null if createDomNode returns null', () => {
    const createDomNode = jest.fn(() => null)
    const {result} = renderHook(() => useExternal(createDomNode))
    expect(createDomNode).toHaveBeenCalled()
    expect(result.current).toBeNull()
  })
})
