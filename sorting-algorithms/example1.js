const arr = [6, 4, 15, 10]
const arr2 = ['Steele', 'Colt', 'Data Structures', 'Algorithms']

arr.sort((n1, n2) => n1 - n2)
console.log(arr)

arr.sort((n1, n2) => n2 - n1)
console.log(arr)

arr2.sort((str1, str2) => str1.length - str2.length)
console.log(arr2)

arr2.sort((str1, str2) => str2.length - str1.length)
console.log(arr2)