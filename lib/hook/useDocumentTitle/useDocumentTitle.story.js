import {hookTestBedControl} from '../../../.storybook/component'
import UseDocumentTitleTestBed from './useDocumentTitle.testbed'
import UseDocumentTitleTestBedJSX from './useDocumentTitle.testbed?raw'

/**
 * The `useDocumentTitle` is a custom React Hook designed to declaratively update the document title within a React component.
 * The hook takes a title as an argument and updates the document title.
 * Optionally, it can restore the previous title when the component is unmounted.
 *
 * ```jsx
 * useDocumentTitle(title, option)
 * ```
 *
 * ```jsdoc
 * @param {string|null} title  the title.
 * @param {Object} [option]  the option object.
 * @param {boolean} [option.restoreOnUnmount=true]  restore previous title on unmount.
 * ```
 *
 * ### Example
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
  title: 'Hook/useDocumentTitle',
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
  decorators: [
    hookTestBedControl,
  ],
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
