# Bubble Sort

**Bubble Sort:** A sorting algorithm where the larges values bubble up to the top!

## Before we sort, we must swap!

```js
// ES5
function swap (arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// ES2015
const swap = (arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
```