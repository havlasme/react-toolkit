import React from 'react'

/**
 * Inject resolved component projection.
 *
 * @param {JSX.Element} Component
 * @param {function} resolveComponent
 * @param {string} propName
 * @return {JSX.Element}
 */
const injectComponent = function (Component, resolveComponent, propName = 'projection') {
    return function InjectComponentHOC ({ [propName]: projection, ...rest }) {
        const injected = { ...rest, [propName]: resolveComponent(projection) }

        return <Component {...injected}/>
    }
}

export default injectComponent
