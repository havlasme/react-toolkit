import {identity, memoizeWith} from 'ramda'

const normalize = memoizeWith(identity, function (string) {
  return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
})

/**
 * Case, and diacritic insensitive text search.
 * The normalization callback is memoized.
 *
 * @param {string|null} haystack  the haystack.
 * @param {string|null} needle  the needle.
 * @return {boolean}
 */
const includes = function (haystack, needle) {
  return typeof haystack === 'string' && typeof needle === 'string'
    && normalize(haystack).includes(normalize(needle))
}

export default includes
