function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function pivot (arr, start = 0, end = arr.length - 1) {
  let pivotIdx = Math.floor(Math.random() * arr.length)
  console.log(pivotIdx)
  let pivot = arr[pivotIdx]
  swap(arr, pivotIdx, end)
  swapIdx = start

  for (let i = start; i < end; i++) {
    if (pivot > arr[i]) {
      swap(arr, swapIdx, i)
      swapIdx++
    }
  }

  swap(arr, swapIdx, end)
  return swapIdx
}

console.log(pivot([1, 8, 2, 9, 5, 7, 6, 3, 1]))