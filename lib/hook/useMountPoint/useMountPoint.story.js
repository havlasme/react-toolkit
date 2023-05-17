import {hookTestBedControl} from '../../../.storybook/component'
import UseMountPointTestBed from './useMountPoint.testbed'
import UseMountPointTestBedJSX from './useMountPoint.testbed?raw'

/**
 * The `useMountPoint` is a custom React Hook that creates a DOM node and appends it to the document body.
 * The hook takes a callback as an argument that should create and return a DOM node.
 *
 * ```jsx
 * const domNode = useMountPoint(createDomNode)
 * ```
 *
 * ```jsdoc
 * @param {function} createDomNode  the callback that creates dom node.
 * @return {any}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const domNode = useMountPoint(
 *     function() {
 *       return document.createElement('div')
 *     })
 *
 *   return createPortal((
 *     <div>
 *       Modal component
 *     </div>
 *   ), domNode)
 * }
 * ```
 */
export default {
  title: 'Hook/useMountPoint',
  component: UseMountPointTestBed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseMountPointTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
