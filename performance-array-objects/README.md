# Performance of Array, Objects & Built-in Methods

## Objects - unordered, key value pairs

### When to use objects
* don't need order
* need fast access/insertion and removal

### Big-O of Objects
* Insertion - O(1)
* Removal - O(1)
* Searching - O(n)
* Accessing - O(1)

### Big-O of Object Methods
* Object.keys - O(n)
* Object.values - O(n)
* Object.entries - O(n)
* hasOwnProperty - O(1)

## Arrays - ordered lists

### When to use arrays
* need order

### Big-O of Arrays
* Insertion - it depends
* Rmoval - it depends
* Searching - O(n)
* Access - O(1)

### Big-O of Array Operations
* push - O(1)
* pop - O(1)
* shift - O(n)
* unshift - O(n)
* concat - O(n)
* slice - O(n)
* splice - O(n)
* sort - O(nlogn)
* forEach/map/filter/reduce/etc. - O(n)