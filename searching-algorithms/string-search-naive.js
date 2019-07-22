/*
function stringSearch (long, short) {
  let count = 0

  for (let i = 0; i < long.length - short.length + 1; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break
      if (short.length - 1 === j) count++
    }
  }

  return count
}
*/

function stringSearch (long, short) {
  let count = 0
  let temp = []

  if (long.length < short.length) return null

  for (let i = 0; i < short.length; i++) {
    temp.push(long[i])
  }

  for (let i = short.length; i < long.length; i++) {
    temp.shift()
    temp.push()
  }
}

console.log(stringSearch ('omg wowomgzomg', 'omg'))