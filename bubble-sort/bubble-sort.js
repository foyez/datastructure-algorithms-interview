// O(n)     O(n^2)
// Best      Worst

function bubbleSort (arr) {

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

console.log(bubbleSort ([1, 4, 3, -3, 9, 5, 8]))