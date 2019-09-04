function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  let lookup = {}

  for(let i in first) {
    let letter = first[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i in second) {
    let letter = second[i]
    
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('rat', 'cat'))