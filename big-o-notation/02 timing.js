// sum of all numbers from 1 up to some number n

/*--------------- #1 -------------------*/
const addUpTo = (n) => {
  let tot = 0;
  for(let i = 1; i <= n; i++) {
    tot += i;
  }
  return tot;
}
// console.log(addUpTo(5));

/*--------------- #2 -------------------*/
const addUpTo1 = n => {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
addUpTo1(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);