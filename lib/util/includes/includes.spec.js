import includes from './includes'

describe('includes', () => {
  const haystack = 'The quick brown fox jumps over the lazy dog'

  describe('should check if the haystack includes the needle', () => {
    it('should return true if the needle is present in the haystack', () => {
      expect(includes(haystack, 'fox')).toBe(true)
    })

    it('should return false if the needle is not present in the haystack', () => {
      expect(includes(haystack, 'cat')).toBe(false)
    })

    it('should return false if the needle is null or undefined', () => {
      expect(includes(haystack, null)).toBe(false)
      expect(includes(haystack, undefined)).toBe(false)
    })
  })

  describe('should normalize the strings before comparing them', () => {
    it('should normalize diacritic marks in the strings', () => {
      expect(includes(haystack, 'jumps over')).toBe(true)
      expect(includes(haystack, 'jùmps ovér')).toBe(true)
    })

    it('should ignore case sensitivity in the strings', () => {
      expect(includes(haystack, 'THe quIck BROWN')).toBe(true)
      expect(includes(haystack, 'the QUICK brown')).toBe(true)
    })
  })

  describe('should handle null or undefined haystack input', () => {
    it('should return false if the haystack is null or undefined', () => {
      expect(includes(null, 'fox')).toBe(false)
      expect(includes(undefined, 'fox')).toBe(false)
    })

    it('should return false if the haystack is not a string', () => {
      expect(includes(123, 'fox')).toBe(false)
      expect(includes([], 'fox')).toBe(false)
    })
  })

  describe('should handle null or undefined needle input', () => {
    it('should return false if the needle is null or undefined', () => {
      expect(includes(haystack, null)).toBe(false)
      expect(includes(haystack, undefined)).toBe(false)
    })

    it('should return false if the needle is not a string', () => {
      expect(includes(haystack, 123)).toBe(false)
      expect(includes(haystack, [])).toBe(false)
    })
  })
})
