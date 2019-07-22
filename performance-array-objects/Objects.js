let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty('favoriteNumbers'));