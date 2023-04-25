import {renderHook} from '@testing-library/react'
import useDocumentTitle from '../useDocumentTitle'

describe('useDocumentTitle', () => {
  it('should update document title', () => {
    const {rerender} = renderHook((state) => useDocumentTitle(state), {initialProps: 'Initial Document Title'})

    expect(document.title).toBe('Initial Document Title')

    rerender('New Document Title')
    expect(document.title).toBe('New Document Title')
  })

  it('should restore document title on unmount', () => {
    document.title = 'Initial Document Title'
    const {unmount} = renderHook((state) => useDocumentTitle(state, {restoreOnUnmount: true}), {initialProps: 'New Document Title'})

    expect(document.title).toBe('New Document Title')

    unmount()
    expect(document.title).toBe('Initial Document Title')
  })

  it('should not restore document title on unmount', () => {
    document.title = 'Initial Document Title'
    const {unmount} = renderHook((state) => useDocumentTitle(state, {restoreOnUnmount: false}), {initialProps: 'New Document Title'})

    expect(document.title).toBe('New Document Title')

    unmount()
    expect(document.title).toBe('New Document Title')
  })
})
