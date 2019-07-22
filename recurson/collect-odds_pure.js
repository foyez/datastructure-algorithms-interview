function collectOdds (arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)))
  return newArr
}

console.log(collectOdds([1, 2, 3, 4, 5]))

/* 
collectOdds([1, 2, 3, 4, 5]) 
[1].concat(collectOdds([2, 3, 4, 5]))
              [].concat(collectOdds([3, 4, 5]))
                          [3].concat(collectOdds([4, 5]))
                              [].concat(collectOdds([5]))
                                  [5].concat(collectOdds([]))
                                        []
*/