import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react'
import useMountPoint from './useMountPoint'

const setUp = (callback) =>
  renderHook(() => useMountPoint(callback))

describe('useMountPoint', () => {
  it('should create a dom node', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result} = setUp(createDomNode)
    expect(result.current.tagName).toBe('DIV')
    expect(createDomNode).toHaveBeenCalledTimes(1)
  })

  it('should return the same element on subsequent renders', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result, rerender} = setUp(createDomNode)
    const domNode = result.current
    rerender()
    expect(createDomNode).toHaveBeenCalledTimes(1)
    expect(result.current).toBe(domNode)
  })

  it('should append the dom node to the document body', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result} = setUp(createDomNode)
    expect(result.current).toBeInTheDocument()
  })

  it('should remove the dom node from the document body when unmounted', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result, unmount} = setUp(createDomNode)
    expect(result.current).toBeInTheDocument()
    unmount()
    expect(result.current).not.toBeInTheDocument()
  })
})
