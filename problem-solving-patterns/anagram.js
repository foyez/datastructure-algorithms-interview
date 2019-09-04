function validAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false
  }

  let freqCounter1 = {}
  let freqCounter2 = {}

  for (let val of str1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }

  for (let val of str2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false
    }

    if (freqCounter1[key] !== freqCounter2[key]) {
      return false
    }
  }
2.
  return true
}

console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('rat', 'cat'))