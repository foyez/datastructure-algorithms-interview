// const same = (arr1, arr2) => {
//   let count = 0
//   for(let item1 of arr1) {
//     for(let item2 of arr2) {
//       if (item1 * item1 === item2) {
//         count++
//       }
//     }
//   }

//   if (count === arr1.length) {
//     return true
//   } else {
//     return false
//   }
// }

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }

  for(let i in arr1) {

    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    
    if (correctIndex === -1) {
      return false
    }

    arr2.splice(correctIndex, 1)
  }

  return true
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))
console.log(same([1, 2, 2], [1, 4]))