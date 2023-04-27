import IncludesTestBed from './includes.testbed'
import IncludesTestBedJSX from './includes.testbed?raw'

/**
 * The `includes` function returns a boolean value indicating whether the needle string was found in the haystack string.
 * Values are normalized by converting them to lowercase and removing any diacritic marks, using the Unicode Normalization Form Canonical Decomposition (NFD).
 *
 * ```jsdoc
 * @param {string|null} haystack  the haystack.
 * @param {string|null} needle  the needle.
 * @return {boolean}
 * ```
 *
 * ```jsx
 * const haystack = 'The quick brown fox jumps over the lazy dog'
 *
 * if (includes(haystack, 'jUmPs ovér')) {
 *   console.log('match found!')
 * }
 * ```
 */
export default {
  title: 'Util/includes',
  component: IncludesTestBed,
  tags: ['autodocs'],
  argTypes: {
    haystack: {
      name: 'haystack',
      type: {name: 'string'},
      description: 'the haystack.',
    },
    needle: {
      name: 'needle',
      type: {name: 'string'},
      description: 'the needle.',
    },
  },
  parameters: {
    docs: {
      source: {
        code: IncludesTestBedJSX,
      },
    },
  },
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    haystack: 'The quick brown fox jumps over the lazy dog',
    needle: 'jùmPŠ ovér'
  }
}
