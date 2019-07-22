function countDown (n) {
  if (n <= 0) {
    console.log('All Done!')
    return
  }
  console.log(n)
  n--
  countDown(n)
}

// countDown(3)
// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print "All Done!"

// function countDown (n) {
//   for (let i = n; i > 0; i--) {
//     console.log(i)
//   }
//   console.log('All Done!')
// }

countDown(3)