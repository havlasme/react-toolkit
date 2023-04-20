const createBackdropElement = function (show) {
    const element = document.createElement('div')

    element.classList.add('modal-backdrop')
    element.classList.add('fade')
    if (show) element.classList.add('show')

    return element
}

export default createBackdropElement
