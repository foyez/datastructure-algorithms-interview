/* 
Best performing implementation(s) per browser:
  * Chrome 15 - implementations 1 and 6
  * Firefox 7 - implementation 6
  * IE 9 - implementation 4
  * Opera 12 - implementation 9
*/

// Implementation 1:
const reverse = s => {
  let o = '';
  for(let i = s.length - 1; i >= 0; i--) {
    o += s[i];
  }
  return o;
}
console.log(reverse('Implementation 1'));

// Implementation 2:
const reverse2 = s => {
  let o = [];
  for(let i = s.length - 1, j = 0; i >= 0; i--, j++) {
    o[j] = s[i];
  }
  return o.join('');
}
console.log(reverse2('Implementation 2'));

// Implementation 4:
const reverse3 = s => {
  let o = [];
  for(let i = 1, len = s.length; i <= len; i++) {
    o.push(s.charAt(len - i));
  }
  return o.join('');
}
console.log(reverse3('Implementation 3'));

// Implementation 4:
const reverse4 = s => {
  return s.split('').reverse().join('');
}
console.log(reverse4('Implementation 4'));

// Implementation 5:
const reverse5 = s => {
  let i = s.length,
      o = '';

  while(i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}
console.log(reverse5('Implementation 5'));

// Implementation 6:
const reverse6 = s => {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]){}
  return o;
}
console.log(reverse6('Implementation 6'));

// Implementation 7:
const reverse7 = s => {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
console.log(reverse7('Implementation 7'));

// Implementation 8:
const reverse8 = s => {
  const rev = (s, len, o) => {
    return (len === 0) ? o : rev(s, --len, (o += s[len]));
  };
  return rev(s, s.length, '');
};
console.log(reverse8('Implementation 8'));