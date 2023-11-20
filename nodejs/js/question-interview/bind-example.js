var x = 9;
const add = {
  x: 3,
  print: function () {
    return this.x;
  },
};

const ob = {
  x: 7,
};

const what = add.print.bind(); // this of window
const what2 = add.print.bind(ob); // this of ob
console.log(what()); // 9
console.log(what2()); //7
