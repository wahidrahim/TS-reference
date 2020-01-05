import assert from 'assert'

const validAnagram = (word1: string, word2: string) => {
  if (word1.length !== word2.length) return false

  const word1Arr = word1.split('')
  let word2Arr = word2.split('')

  for (let c1 of word1Arr) {
    const i = word2Arr.indexOf(c1)

    if (i >= 0) {
      word2Arr.splice(i, 1)
    }
  }

  return word2Arr.length === 0
}

assert(validAnagram('', '') === true)
assert(validAnagram('aaz', 'zza') === false)
assert(validAnagram('anagram', 'nagaram') === true)
assert(validAnagram('rat', 'car') === false)
assert(validAnagram('awesome', 'awesom') === false)
assert(validAnagram('qwerty', 'qeywrt') === true)
assert(validAnagram('texttwisttime', 'timetwisttext') === true)
