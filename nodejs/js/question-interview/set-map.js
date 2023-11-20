const set = new Set([1, 4, 5, 7, 2, 3, 9]);
console.log({ set });
const map = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);
console.log(map.get('apples'));
console.log({ map });
(() => {
  console.log(this);
})();
