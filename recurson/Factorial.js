// function fact (n) {
//   let total = 1

//   for (let i = n; i >= 1; i--) {
//     total *= i;
//   }

//   return total
// }

function fact (n) {
  if (n === 1) return 1
  return n * fact (n - 1)
}

console.log(fact (4))
console.log(fact (5))