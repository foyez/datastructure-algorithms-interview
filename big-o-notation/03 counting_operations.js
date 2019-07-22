// sum of all numbers from 1 up to some number n

/*--------------- #1 -------------------*/
const addUpTo = (n) => {
  let tot = 0;
  for(let i = 1; i <= n; i++) {
    tot += i;
  }
  return tot;
}

/*--------------- #2 -------------------*/
const addUpTo1 = n => {
  return (n * (n + 1)) / 2;
}