import assert from 'assert'

/**
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the letters of another, such as "cinema" formed from "iceman".
 *
 * You can assume the string contains only lowercase alphabets.
 */

interface FrequencyTable {
  [key: string]: number
}

/**
 * Refactored and optimized solution
 * O(n)
 */
function validAnagram(word1: string, word2: string) {
  const word1CharFrequency: FrequencyTable = {}
  const word2CharFrequency: FrequencyTable = {}

  /**
   * Record the number of times a character appears in word1
   * O(n)
   */
  for (const char of word1) {
    word1CharFrequency[char] = (word1CharFrequency[char] || 0) + 1
  }

  /**
   * Record the number of times a character appears in word2
   * O(n)
   */
  for (const char of word2) {
    word2CharFrequency[char] = (word2CharFrequency[char] || 0) + 1
  }

  /**
   * Compare `word1CharFrequency` to `word2CharFrequency`
   * O(n)
   */
  for (const key in word1CharFrequency) {
    // Value of `key` should be the same in both FrequencyTables
    if (word1CharFrequency[key] !== word2CharFrequency[key]) return false
  }

  return true
}

/**
 * Naive solution
 * O(n^2)
 * 
function validAnagram(word1: string, word2: string) {
  if (word1.length !== word2.length) return false

  const word1Arr = word1.split('')
  let word2Arr = word2.split('')

  // O(n)
  for (let c1 of word1Arr) {
    // O(n)
    const i = word2Arr.indexOf(c1)

    if (i >= 0) {
      word2Arr.splice(i, 1)
    }
  }

  return word2Arr.length === 0
}
*/

assert(validAnagram('', '') === true)
assert(validAnagram('aaz', 'zza') === false)
assert(validAnagram('anagram', 'nagaram') === true)
assert(validAnagram('rat', 'car') === false)
assert(validAnagram('awesome', 'awesom') === false)
assert(validAnagram('qwerty', 'qeywrt') === true)
assert(validAnagram('texttwisttime', 'timetwisttext') === true)
