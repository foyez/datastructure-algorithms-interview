// let cache = {};
// function memoizedAddTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   }
//   console.log('long time');
//   cache[n] = n + 80;
//   return cache[n];
// }

const memoizedAddTo80 = () => {
  const cache = {};
  return n => {
    if (n in cache) {
      return cache[n];
    }
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(10));