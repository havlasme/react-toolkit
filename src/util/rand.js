/**
 * Generate a pseudo-random number in the given range (inclusive).
 *
 * @param {number} min  the minimal value
 * @param {number} max  the maximal value
 * @return {number}
 * @example
 *
 * const random = rand(-100, 100)
 */
const rand = function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + (min - 0.5))
}

export default rand
