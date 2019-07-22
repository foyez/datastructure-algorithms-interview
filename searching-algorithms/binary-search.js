// O(log n)       O(1)
// Worst & Avg    Best

function binarySearch (arr, val) {
  let left = 0
  let right = arr.length-1

  while (left < right) {
    let middle = Math.floor((left + right) / 2)

    if (val === middle) {
      return middle
    }else if (val > middle) {
      left = middle + 1
    } else if (val < middle) {
      right = middle - 1
    }
  }

  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,30], 6))
console.log(binarySearch([1,2,3,4,5,6,7,8,30], 10))