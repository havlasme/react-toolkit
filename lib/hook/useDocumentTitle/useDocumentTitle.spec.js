import {renderHook} from '@testing-library/react'
import useDocumentTitle from './useDocumentTitle'

describe('useDocumentTitle', () => {
  afterEach(() => {
    document.title = ''
  })

  it('should update document title when called', () => {
    const {rerender} = renderHook((state) => useDocumentTitle(state), {initialProps: 'First Test Title'})

    expect(document.title).toBe('First Test Title')

    rerender('Second Test Title')
    expect(document.title).toBe('Second Test Title')
  })

  it('should restore previous document title on unmount', () => {
    document.title = 'Previous Title'
    const {unmount} = renderHook(() => useDocumentTitle('Test Title', {restoreOnUnmount: true}))

    expect(document.title).toBe('Test Title')

    unmount()
    expect(document.title).toBe('Previous Title')
  })

  it('should not restore previous document title on unmount if restoreOnUnmount is false', () => {
    document.title = 'Previous Title'
    const {unmount} = renderHook(() => useDocumentTitle('Test Title', {restoreOnUnmount: false}))

    expect(document.title).toBe('Test Title')

    unmount()
    expect(document.title).toBe('Test Title')
  })

  it('should not update the document title if the title argument is null', () => {
    document.title = 'Previous Title'
    renderHook(() => useDocumentTitle(null))

    expect(document.title).toBe('Previous Title')
  })

  it('should throw an error if the title argument is not a string or null', () => {
    expect(() => useDocumentTitle(1)).toThrow(TypeError)
    expect(() => useDocumentTitle(void 0)).toThrow(TypeError)
    expect(() => useDocumentTitle(true)).toThrow(TypeError)
    expect(() => useDocumentTitle([])).toThrow(TypeError)
    expect(() => useDocumentTitle({})).toThrow(TypeError)
  })
})
