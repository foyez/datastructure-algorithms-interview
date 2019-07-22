function collectOdds (arr) {
  let result = []

  function helper (helperInput) {
    if (helperInput.length === 0) {
      return
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper (helperInput.slice(1))
  }

  helper (arr)
  return result
}

console.log(collectOdds([1, 2, 3, 5, 6, 7, 0, 9, 10]))