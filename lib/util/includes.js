import {identity, isNil, memoizeWith} from 'ramda'

const normalize = memoizeWith(identity, function (string) {
  return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
})

/**
 * Case, and diacritic insensitive text search.
 * The normalization callback is memoized.
 *
 * @param {string|null} haystack
 * @param {string|null} needle
 * @return {boolean}
 * @example
 *
 * const haystack = 'Sample mixed-CASE hayStack'
 *
 * console.log(includes(haystack, 'čas'))
 * // this should log true
 */
const includes = function (haystack, needle) {
  return !isNil(haystack) && !isNil(needle)
    && normalize(haystack).includes(normalize(needle))
}

export default includes
