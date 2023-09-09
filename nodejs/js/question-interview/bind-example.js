var x = 9;
const add = {
  x: 3,
  print: function () {
    return this.x;
  },
};

const what = add.print; //its mean -> window.print
const what2 = what.bind(add); //its mean -> add.print
console.log(what()); //undefined
console.log(what2()); //3
