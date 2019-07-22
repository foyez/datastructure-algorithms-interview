function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0

  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num))
  }

  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => [])

    for (let num of nums) {
      const digit = getDigit(num, k)
      digitBuckets[digit].push(num)
    }
    nums = [].concat(...digitBuckets)
  }

  return nums
}

console.log(radixSort([34, 356, 23, -45, 0, 3854, 3, 54]))