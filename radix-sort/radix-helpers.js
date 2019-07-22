function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }

  return maxDigits
}

console.log(getDigit(12345, 0))  // 5
console.log(digitCount(45)) // 2
console.log(mostDigits([1234, 56, 7])) // 4