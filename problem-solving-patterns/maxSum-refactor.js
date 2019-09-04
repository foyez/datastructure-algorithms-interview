function maxSum (arr, num) {
  let maxSum = 0
  let temp = 0

  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  temp = maxSum

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, temp)
  }

  return maxSum
}

console.log(maxSum([4,2,1,6,2], 4)) // 13
console.log(maxSum([], 4)) // null