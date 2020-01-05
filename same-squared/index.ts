import assert from 'assert'

/*******************************************************************************
 * Write a function called `same`, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of values must be the same.
 *******************************************************************************
 */

const same = (arr1: number[], arr2: number[]) => {
  // Both arrays would have to be equal length
  if (arr1.length !== arr2.length) return false

  for (const n of arr1) {
    // Index of the squared number from arr1 in arr2
    const nSquaredIndex = arr2.indexOf(n * n)

    if (nSquaredIndex >= 0) {
      // If the squared number exists in arr2, remove it from arr2
      arr2.splice(nSquaredIndex, 1)
    }
  }

  // Arr2 would have to be empty by the end if it contained all the squared numbers from arr1
  return arr2.length === 0
}

assert(same([1, 2, 3], [4, 1, 9]) === true)
assert(same([1, 2, 3], [1, 9]) === false)
assert(same([1, 2, 1], [4, 4, 1]) === false)
