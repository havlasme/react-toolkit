import {renderHook} from '@testing-library/react'
import useDocumentTitle from './useDocumentTitle'

describe('useDocumentTitle', () => {
  afterEach(() => {
    document.title = ''
  })

  it('should update document title when called', () => {
    const {rerender} = renderHook((state) => useDocumentTitle(state), {initialProps: 'initial title'})
    expect(document.title).toBe('initial title')
    rerender('test title')
    expect(document.title).toBe('test title')
  })

  it('should restore previous document title on unmount', () => {
    document.title = 'previous title'
    const {unmount} = renderHook(() => useDocumentTitle('test title', {restoreOnUnmount: true}))
    expect(document.title).toBe('test title')
    unmount()
    expect(document.title).toBe('previous title')
  })

  it('should not restore previous document title on unmount if restoreOnUnmount is false', () => {
    document.title = 'previous title'
    const {unmount} = renderHook(() => useDocumentTitle('test title', {restoreOnUnmount: false}))
    expect(document.title).toBe('test title')
    unmount()
    expect(document.title).toBe('test title')
  })

  it('should not update the document title if the title argument is null', () => {
    document.title = 'previous title'
    renderHook(() => useDocumentTitle(null))
    expect(document.title).toBe('previous title')
  })

  it('should throw an error if the title argument is not a string or null', () => {
    expect(() => useDocumentTitle(1)).toThrow(TypeError)
    expect(() => useDocumentTitle(void 0)).toThrow(TypeError)
    expect(() => useDocumentTitle(true)).toThrow(TypeError)
    expect(() => useDocumentTitle([])).toThrow(TypeError)
    expect(() => useDocumentTitle({})).toThrow(TypeError)
  })
})
