import assert from 'assert'

/*******************************************************************************
 * Write a function called `same`, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of values must be the same.
 *******************************************************************************
 */

interface FrequencyTable {
  [key: string]: number
}

/**
 * Refactored and optimized solution
 *
 * O(n)
 */
function same(arr1: number[], arr2: number[]) {
  const arr1NumFrequency: FrequencyTable = {}
  const arr2NumFrequency: FrequencyTable = {}

  /**
   * Record the frequency of each numbers in `arr1`
   * O(n)
   */
  arr1.map(n => (arr1NumFrequency[n] = (arr1NumFrequency[n] || 0) + 1))
  /**
   * Record the frequency of each numbers in `arr2`
   * O(n)
   */
  arr2.map(n => (arr2NumFrequency[n] = (arr2NumFrequency[n] || 0) + 1))

  // O(n)
  for (const key in arr1NumFrequency) {
    const keySquared = Number(key) ** 2

    /**
     * Return false if the square of `key` does not exist
     * as a key in `arr2NumFrequency`
     */
    if (!(keySquared in arr2NumFrequency)) return false
    /**
     * Return false if the value (frequency) of `arr1NumFrequency[key]`
     * does not equal value (frequency) of `arr2NumFrequency[keySquared]`
     */
    if (arr1NumFrequency[key] !== arr2NumFrequency[keySquared]) return false
  }

  return true
}

/**
 * Naive solution
 *
 * O(n^2)
 *
function same(arr1: number[], arr2: number[]) {
  // Both arrays would have to be equal length
  if (arr1.length !== arr2.length) return false

  // O(n)
  for (const n of arr1) {

    // Index of the squared number from arr1 in arr2
    // O(n)
    const nSquaredIndex = arr2.indexOf(n * n)

    if (nSquaredIndex === -1) return false

    // If the squared number exists in arr2, remove it from arr2
    // O(n)
    arr2.splice(nSquaredIndex, 1)
  }

  return true
}
*/
assert(same([1, 2, 3], [4, 1, 9]) === true)
assert(same([1, 2, 3], [1, 9]) === false)
assert(same([1, 2, 1], [4, 4, 1]) === false)
assert(same([3, 5, 2, 23, 21, 0, 32], [9, 25, 4, 529, 441, 0, 1024]) === true)
assert(same([3, 5, 2, 23, 21, 0, 32], [9, 25, 4, 529, 441, 1, 1024]) === false)
