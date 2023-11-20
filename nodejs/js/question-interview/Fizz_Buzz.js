/* Without '% and /' */
const a = 3,
  b = 5,
  n = 30;
function calc(a, b, n) {
  if (a === undefined) {
    let ans = 1,
      i = 1,
      ob = {};
    while (ans <= n) {
      ans = i * b;
      if (ans > n) return ob;
      i++;
      ob[ans] = `div${b}`;
    }
    return ob;
  }
  if (b === undefined) {
    let ans = 1,
      i = 1,
      ob = {};
    while (ans <= n) {
      ans = i * a;
      if (ans > n) return ob;
      i++;
      ob[ans] = `div${a}`;
    }
    return ob;
  }
  if (a !== undefined && b !== undefined) {
    let ans = 1,
      i = 1,
      ob = {};
    while (ans <= n) {
      ans = i * (a * b);
      if (ans > n) return ob;
      i++;
      ob[ans] = `div${ans}`;
    }
    return ob;
  }
}

const ob1 = calc(3, undefined, 30);
const ob2 = calc(3, 5, 30);
const ob3 = calc(undefined, 5, 30);
const ob = { ...ob1, ...ob3, ...ob2 };
const arr = Object.keys(ob);

for (let i = 1; i <= n; i++) {
  if (!arr.includes(i.toString())) {
    ob[i] = i;
  }
}
console.log(ob);
