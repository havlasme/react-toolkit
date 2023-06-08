import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react'
import useDomNode from './useDomNode'

const setUp = ({createDomNode}) => renderHook(
  ({createDomNode}) => useDomNode(createDomNode),
  {
    initialProps: {createDomNode},
  },
)

describe('useDomNode', () => {
  it('should return the dom node', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result} = setUp({createDomNode})
    expect(result.current.tagName).toBe('DIV')
    expect(createDomNode).toHaveBeenCalledTimes(1)
  })

    it('should insert the dom node to the document', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result} = setUp({createDomNode})
    expect(result.current).toBeInTheDocument()
  })

  it('should remove the dom node from the document on unmount', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result, unmount} = setUp({createDomNode})
    expect(result.current).toBeInTheDocument()
    unmount()
    expect(result.current).not.toBeInTheDocument()
  })

  it('should memoize the dom node', () => {
    const createDomNode = jest.fn(() => document.createElement('div'))
    const {result, rerender} = setUp({createDomNode})
    const domNode = result.current
    rerender({createDomNode})
    expect(createDomNode).toHaveBeenCalledTimes(1)
    expect(result.current).toBe(domNode)
  })
})
