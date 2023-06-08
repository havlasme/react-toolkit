import {hookTestBedControl} from '../../../.storybook/component'
import UseDomNodeTestbed from './useDomNode.testbed'
import UseDomNodeTestBedJSX from './useDomNode.testbed?raw'

/**
 * The `useDomNode` is a custom React Hook that creates a dom node and appends it to the document body. The hook
 * takes a **createDomNode** as an argument that should create and return a dom node. The hook **returns** the dom node.
 *
 * ```jsx
 * const domNode = useDomNode(createDomNode)
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
 *   const domNode = useDomNode(
 *     function () {
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
  title: 'Hook/useDomNode',
  component: UseDomNodeTestbed,
  tags: ['autodocs'],
  decorators: [
    hookTestBedControl,
  ],
  parameters: {
    docs: {
      source: {
        code: UseDomNodeTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
