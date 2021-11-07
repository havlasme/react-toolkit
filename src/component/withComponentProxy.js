import React from 'react'

/**
 * The component prop proxy HOC.
 *
 * @param {*} Component
 * @returns {function(*)}
 */
const withComponentProxy = function (Component) {
    return function ComponentProxyHOC(rest) {
        return <Component {...rest}/>
    }
}

export default withComponentProxy
