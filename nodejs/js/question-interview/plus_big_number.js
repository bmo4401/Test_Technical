let s1 = '48547985487498',
  s2 = '56388576977766965';
console.log(s1.length, s2.length);
console.log(Number(s1) + Number(s2));
let carry = 0,
  answer = '',
  sum = 0,
  temp = 0;
let len1 = s1.length,
  len2 = s2.length;
while (s1.length > 0 || s2.length > 0) {
  let d1 = +s1[s1.length - 1];
  let d2 = +s2[s2.length - 1];

  if (s1.length === 0) d1 = 0;
  else s1 = s1.slice(0, -1);
  if (s2.length === 0) d2 = 0;
  else s2 = s2.slice(0, -1);

  temp = d1 + d2;

  sum = (temp % 10) + carry;
  carry = temp >= 10 ? 1 : 0;
  answer = sum + answer;
  console.log({ d1 }, { d2 }, { sum }, { carry }, { answer });
}
console.log(answer);
