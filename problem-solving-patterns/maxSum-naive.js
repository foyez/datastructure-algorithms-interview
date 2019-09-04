// Time Complexity - O(N^2)
function maxSum (arr, num) {
  if (num > arr.length) {
    return null
  }

  let max = -Infinity

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0

    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }

    console.log(temp)
    if (temp > max) {
      max = temp
    }
  }

  return max
}

console.log(maxSum([4,2,1,6,2], 4)) // 13
console.log(maxSum([], 4)) // null