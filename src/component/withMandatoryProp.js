import { any, isNil } from 'ramda'
import React from 'react'

/**
 * Do not render a component when any mandatory prop doesn't comply to the check function.
 *
 * @param {*} Component
 * @param {string[]} propName
 * @param {function} check
 * @return {function(*)}
 */
const withMandatoryProp = function (Component, propName, check = isNil) {
    return function ComponentProxyHOC (rest) {
        return any(check, props(propName, rest)) ? null
            : <Component {...rest}/>
    }
}

export default withMandatoryProp
