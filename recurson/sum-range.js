function sumRange (n) {
  if (n === 1) return 1
  return n + sumRange (n - 1)
}

console.log(sumRange(3))

/*
sumRange (3)
  return 3 + sumRange (2)
                return 2 + sumRange (1)
                              return 1
*/