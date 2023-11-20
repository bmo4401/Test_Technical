const arr = [
  47, 15, 92, 37, 72, 54, 8, 60, 98, 29, 92, 37, 72, 54, 92, 37, 72, 92, 37, 72,
  92, 37, 72,
];
let first = -1,
  second = -1;
for (let i = 0; i < arr.length; i++) {
  if (first == -1) first = i;
  else {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    }
  }
}
console.log(arr[first], arr[second]);
