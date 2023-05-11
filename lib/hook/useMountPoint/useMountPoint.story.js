import {hookTestBedControl} from '../../../.storybook/component'
import UseMountPointTestBed from './useMountPoint.testbed'
import UseMountPointTestBedJSX from './useMountPoint.testbed?raw'

/**
 * The `useMountPoint` hook creates a DOM node for a component to be rendered outside its current location in the React DOM hierarchy.
 * This is achieved by creating a new mount point that is appended to the document body, and using the `createPortal` method to render the component into this new mount point.
 *
 * ```jsdoc
 * @param {function} createDomNode  the callback that creates dom node.
 * @return {any}
 * ```
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
  title: 'Lifecycle/useMountPoint',
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
