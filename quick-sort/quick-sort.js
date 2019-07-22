function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function pivot (arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)

    quickSort(arr, left, pivotIdx - 1) // left
    quickSort(arr, pivotIdx + 1, right) // right
  }

  return arr
}

console.log(quickSort([4, 8, -10, 2, 1, 5, 7, 6, 3]))