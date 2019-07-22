// Time Complexity - O(n)
// O(1)   O(n)    O(n)
// Best  Average  Worst
function linearSearch (arr, val) {
  for (let i in arr) {
    if (arr[i] === val) {
      return i
    }
  }

  return -1
}

console.log(linearSearch (['a', 'g', 'd', 'l', 'o'], 'd'))