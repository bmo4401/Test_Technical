/* count duplicate element */
const map = Array.from(Array(100000), () => 0);

for (let x of arr) {
  if (!map[x]) {
    map[x] = 1;
  } else {
    map[x]++;
  }
}

for (let i = 0; i < map.length; i++) {
  if (map[i] !== 0) console.log(i + ' ' + map[i]);
}
