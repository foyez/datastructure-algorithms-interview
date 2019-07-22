// Write a function which takes in a string and returns counts of each character in the string.

// charOut('Your PIN number is 1234!')
/* {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  b: 1,
  e: 1,
  i: 2,
  m: 1,
  n: 2,
  o: 1,
  p: 1,
  r: 2,
  s: 1
} */

/* function charCount(str) {
  // make object to return at the end
  // loop over string, for each character...
    // if the char isa number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND is not in object, add it and set value to 1
    // if character is something else (space, period, etc.) don't do anything
  // return object at the end
} */

function charCount(str) {
  // make object to return at the end
  let result = {};

  // loop over string, for each character...
  for(let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    // if the char isa number/letter AND is a key in object, add one to count
    if(result[char] > 0) {
      result[char]++;
      // if the char is a number/letter AND is not in object, add it and set value to 1
    } else {
      result[char] = 1;
    }
  }
    
    // if character is something else (space, period, etc.) don't do anything
  // return object at the end
  return result;
}
console.log(charCount('Hi there!'));