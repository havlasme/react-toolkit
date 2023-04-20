import PropType from 'prop-types'

export default {
    /**
     * the children
     */
    children: PropType.node.isRequired,
    /**
     * whether to show the modal
     * default: false
     */
    show: PropType.bool,
}
