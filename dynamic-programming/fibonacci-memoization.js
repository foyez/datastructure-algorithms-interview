// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
let calculations = 0;
function fibonacci(n) { // O(2^n)
  calculations++;

  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

const fibonacciMemoized = () => { // O(n)
  const cache = {};
  return fib = n => {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 2) + fib(n - 1);
        return cache[n];
      }
    }
  }
}

const fasterFibo = fibonacciMemoized();

console.log(fasterFibo(10));