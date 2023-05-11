import UseDocumentTitleTestBed from './useDocumentTitle.testbed'
import UseDocumentTitleTestBedJSX from './useDocumentTitle.testbed?raw'

/**
 * The `useDocumentTitle` hook allows to update the title of the current web page.
 * Optionally, it can restore the previous title when the component using the hook is unmounted.
 *
 * ```jsdoc
 * @param {string|null} title  the title.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.restoreOnUnmount=true]  restore previous title on unmount.
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   useDocumentTitle('new document title')
 *
 *   return null
 * }
 * ```
 */
export default {
  title: 'Side Effect/useDocumentTitle',
  component: UseDocumentTitleTestBed,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      type: {name: 'string'},
      description: 'the document title.',
    },
    restoreOnUnmount: {
      name: 'option.restoreOnUnmount',
      type: {name: 'boolean'},
      description: 'restore previous title on unmount.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: UseDocumentTitleTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    title: 'the document title',
    restoreOnUnmount: true,
  },
}
