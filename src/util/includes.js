import { identity, isNil, memoizeWith } from 'ramda'

const normalize = memoizeWith(identity, function (string) {
    return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
})

/**
 * Perform case, and diacritic insensitive search.
 *
 * @param {string|null} haystack
 * @param {string|null} needle
 * @return {boolean}
 */
const includes = function (haystack, needle) {
    return !isNil(haystack) && !isNil(needle)
        && normalize(haystack).includes(normalize(needle))
}

export default includes
