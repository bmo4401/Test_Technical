console.log(isNaN('Hello'));
console.log(Number.isNaN(NaN));

let result = 5 / 0; // result is NaN
let result2 = 'abc' * 2; // result is NaN
let result3 = parseFloat('Hello'); // result is NaN
let result4 = Math.sqrt(-1); // result is NaN
let result5 = NaN;

console.log('9' > 11); //false
console.log('' > -1); // true -> "" = 0
console.log('Hello' > 1); //Hello -> NaN, NaN always false when compared to number
