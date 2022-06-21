import { nAry } from 'ramda'

/**
 * Wrap a function of any arity in a function that dismisses all arguments.
 *
 * @param {function} callback  a function
 * @return {function}
 */
export default nAry(0)
