# Sorting Algorithms

## What is sorting?

```
Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
```

**Examples:**
* Sorting numbers from smallest to largest
* Sorting names alphabetically
* Sorting movies based on release year
* Sorting movies based on revenue

**15 Sorting Algorithms in 6 Minutes:** panthema.net/2013/sound-of-sorting

## Why do we need to learn sorting?
* Sorting is an incredibly common task, so it's good to know how it works
* There are many different ways to sort things, and different techniques have their own advantages and disadvantages

## Comparison Sorting Algorithms
1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort
6. Heap Sort
7. Shell Sort
8. Tim Sort
9. Cycle Sort

## Non-Comparison Sorting Algorithms
1. Radix Sort
2. Counting Sort
3. Bucket Sort

**Sorting Algorithms Animation**
Types of data  | Insertion | Selection | Bubble | Shell | Merge | Quick 
-------------- | ---------------------------------------------------------
Random         | Tim  | 57  | NYC      | null
Nearly Sorted  | Ira  | 24  | Missoula | purple
Reversed       | Sue  | 40  | Boulder  | null
Few Unique     | Sue  | 40  | Boulder  | null

## Big 0 of Sorting Algorithms

Algorithm      | Best       | Average        | Worst          | Space Complexity
-------------- | ---------- | -------------- | -------------- | -----------------
Bubble Sort    | O(n)       | O(n^2)         | O(n^2)         | O(1)
Insertion Sort | O(n)       | O(n^2)         | O(n^2)         | O(1)
Selection Sort | O(n^2)     | O(n^2)         | O(n^2)         | O(1)
Merge Sort     | O(n log n) | O(n log n)     | O(n log n)     | O(n)
Quick Sort     | O(n log n) | O(n log n)     | O(n^2)         | O(log n)
Heap Sort      | O(n log n) | O(n log n)     | O(n log n)     | O(1)
Shell Sort     | O(n log n) | O(n (log n)^2) | O(n (log n)^2) | O(1)
Radix Sort     | O(nk)      | O(nk)          | O(nk)          | O(n + k)
Counting Sort  | O(n + k)   | O(n + k)       | O(n + k)       | O(k)

## Built-In JS Sorting method - sort()
* The default sort order is according to string Unicode code points
* sort(a, b):
    * If it returns negative, a should come before b
    * If it returns positive, b should come before a
    * If it returns 0, a & b are the same as far as the sort is concerned

**Example1**
```js
function numberCompare(n1, n2) {
  return n1 - n2
}

[6, 4, 15, 10].sort(numberCompare)
// [4, 6, 10, 15]
```

**Example2**
```js
function compareByLen (str1, str2) {
  return str1.length - str2.length
}
// [ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)
```