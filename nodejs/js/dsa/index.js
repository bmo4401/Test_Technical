const s = 'abcdefg';
const arr = [];
for (let i = 0; i < s.length; i++) {
  let temp = '';
  for (let j = i; j < s.length; j++) {
    temp += s[j];
    arr.push(temp);
  }
  console.log(temp);
}
