# Problem Solving Patterns

## How to Improve?
1. Devise a plan for solving problems
2. Master common problem solving patterns

## Some Patterns...
* Frequency Counter
* Multiple Pointers
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* Many more!

### I. Frequency Counters
* This pattern uses objects or sets to collect values/frequencies of values
* This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

**Example1:** Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. (Same frequency)

```txt
input:
arr1 = [1, 2, 3]
arr2 = [4, 1, 9]

output: true
```

```py
def sameSquared(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
```

**Example2:** Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. (ANAGRAMS)

### II. Multiple Pointers
* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certaain condition
* Very efficient for solving problems with minimal space complexity as well

**Example1:** Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

**Example2:** Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

### III. Sliding Window
* This pattern involves creating a window which can either be an array or number from one position to another.
* Depending on a certain condition, the window either increases or closes (and a new window is created).
* Very useful for keeping track of a subset of data in array/string etc.

**Example1:** Write a function called maxSubarraySum wich accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

### IV. Divide and Conquer
* This pattern involves dividing a data set into smaller chuncks and then repeating a process with a subset of data.
* This pattern can tremendouly **decrease time complexity**.

**Example1:** Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
