const arr = [42, 13, [25], 79, 98, 92, 20, 63, 54, 73];
const deepCopy = JSON.parse(JSON.stringify(arr));
const shallowCopy = [...arr];

/* arr.pop();
console.log({ pop: arr });
arr.splice(0, 1);
console.log({ splice: arr }); */
/* const temp = arr.slice(2, -1);
console.log({ slice: temp }); */

shallowCopy[2][0] = 26;
shallowCopy[1] = 26;

console.log({ shallowCopy });
console.log({ arr });

/* 1. Copy Array
1.1 Shallow copy
a. Spread [...array] -> nested array not affected
1.2 Deep copy
b. JSON.parse(JSON.stringify(array))

2. Delete Array
2.1 Operator delete -> element = undefined
2.2 Splice
*/

const ob = {
  a: 2,
  b: 12,
  c: 83,
  d: 86,
  e: 59,
};
const key = Reflect.get(ob, 'a');
/* delete ob.a; */
console.log({ ob });
console.log({ key });
/* 
1. Copy Object
1.1 Shallow Copy
a. Spread
b. Object.assign
1.2 Deep copy
a. JSON.parse(JSON.stringify(array))
b. StructuredClone

2. Delete Object
2.1 Operator delete
2.2 Destructuring
2.3 Namespace Reflect

*/
