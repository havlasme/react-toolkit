import {renderHook} from '@testing-library/react'
import useDocumentTitle from './useDocumentTitle'

const setUp = ({title, restoreOnUnmount}) => renderHook(
  ({title, restoreOnUnmount}) => useDocumentTitle(title, {restoreOnUnmount}),
  {
    initialProps: {title, restoreOnUnmount},
  },
)

describe('useDocumentTitle', () => {
  afterEach(() => {
    document.title = ''
  })

  it('should set the document title', () => {
    const {rerender} = setUp({title: 'initial title'})
    expect(document.title).toBe('initial title')
    rerender({title: 'next title'})
    expect(document.title).toBe('next title')
  })

  it('should not set the document title if the title argument is null', () => {
    document.title = 'previous title'
    setUp({title: null})
    expect(document.title).toBe('previous title')
  })

  it('should restore previous document title on unmount', () => {
    document.title = 'previous title'
    const {unmount} = setUp({title: 'next title', restoreOnUnmount: true})
    expect(document.title).toBe('next title')
    unmount()
    expect(document.title).toBe('previous title')
  })

  it('should not restore previous document title on unmount if restoreOnUnmount is false', () => {
    document.title = 'previous title'
    const {unmount} = setUp({title: 'next title', restoreOnUnmount: false})
    expect(document.title).toBe('next title')
    unmount()
    expect(document.title).toBe('next title')
  })

  it('should throw an error if the title argument is not a string or null', () => {
    expect(() => useDocumentTitle(1)).toThrow(TypeError)
    expect(() => useDocumentTitle(void 0)).toThrow(TypeError)
    expect(() => useDocumentTitle(true)).toThrow(TypeError)
    expect(() => useDocumentTitle([])).toThrow(TypeError)
    expect(() => useDocumentTitle({})).toThrow(TypeError)
  })
})
