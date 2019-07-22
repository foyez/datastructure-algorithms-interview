/*
function charCount(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      if(obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
*/

/*
function charCount(str) {
  let obj = {};
  for(let char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      if(obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
*/

/* 55% slower than charCode
function charCount(str) {
  let obj = {};
  for(let char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      // (obj[char] > 0) ? obj[char]++ : obj[char] = 1;
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
*/

/*
function charCount(str) {
  let obj = {};
  for(let char of str) {
    char = char.toLowerCase();
    code = char.charCodeAt(0);
    if((code > 47 && code < 58) || // numeric(0-9)
      (code > 96 && code < 123)) { // lower alpha (a-z)
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
*/

function isAlphaNumerc(char) {
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha (a-z)
    !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
}

function charCount(str) {
  let obj = {};
  for(let char of str) {
    if(isAlphaNumerc(char)) {
      char = char.toLowerCase();
      // (obj[char] > 0) ? obj[char]++ : obj[char] = 1;
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCount('Hi ther!'));