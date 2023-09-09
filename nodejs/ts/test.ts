let a = [1, 2, 3, 4, 5];
let object = { name: 'Hai', age: 20, city: 'Vung Tau' };
const [b, c, d, ...rest] = a;
const { city, ...rest2 } = object;
