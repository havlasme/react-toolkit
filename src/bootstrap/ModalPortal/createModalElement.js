const createModalElement = function (show) {
    const element = document.createElement('div')

    element.classList.add('modal')
    element.classList.add('fade')
    if (show) element.classList.add('show')
    element.setAttribute('role', 'dialog')
    element.tabIndex = -1

    return element
}

export default createModalElement
