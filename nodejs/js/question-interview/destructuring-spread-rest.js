const arr = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = arr; //destructuring and rest
console.log({ first });
console.log({ second });
console.log({ rest });
const spread = [...arr]; //spread
console.log({ spread });
