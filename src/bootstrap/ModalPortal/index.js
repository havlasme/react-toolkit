import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import useBoolState from '../../hook/useBoolState'
import createBackdropElement from './createBackdropElement'
import createModalElement from './createModalElement'
import propTypes from './index.type'

/**
 * The ModalPortal component.
 *
 * @return {JSX.Element|null}
 * @constructor
 */
const ModalPortal = function ({ children, show = false }) {
    // the modal element reference
    const modal = useRef(createModalElement(show))
    // the backdrop element reference
    const backdrop = useRef(createBackdropElement(show))
    // whether is the modal element mounted
    const [mounted, setMounted] = useBoolState(false)

    useEffect(function () {
        if (show) {
            document.body.appendChild(backdrop.current)
            backdrop.current.classList.add('show')
            document.body.appendChild(modal.current)
            modal.current.classList.add('show')

            setMounted(true)
        } else {
            if (document.body.contains(modal.current)) {
                document.body.removeChild(modal.current)
                modal.current.classList.remove('show')
            }
            if (document.body.contains(backdrop.current)) {
                document.body.removeChild(backdrop.current)
                backdrop.current.classList.remove('show')
            }

            setMounted(false)
        }

        return function () {
            if (document.body.contains(modal.current)) {
                document.body.removeChild(modal.current)
            }
            if (document.body.contains(backdrop.current)) {
                document.body.removeChild(backdrop.current)
            }
        }
    }, [backdrop, modal, show])

    return show ? createPortal(mounted ? children : null, modal.current) : null
}

ModalPortal.propTypes = propTypes

export default ModalPortal
