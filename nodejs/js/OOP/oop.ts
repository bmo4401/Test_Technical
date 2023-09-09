/* 
#name -> private
.name -> protected
*/

class People {
  _name: string;
  _age: number;
  static count: number = 0;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
    People.count++;
  }
  print() {
    console.log(this._name + '' + this._age);
  }
}

const me = new People('Hai', 20);
console.log(People.count);
class Teacher extends People {
  gender: string;
  constructor(name: string, age: number, gender: string) {
    super(name, age);
    this.gender = gender;
  }
  print() {
    console.log(this._name + '-' + this._age + '-' + this.gender);
  }
}

const teacher = new Teacher('Ha', 22, 'male');
teacher.print();
console.log(People.count);

abstract class Print {
  abstract print(message: string): void;
}

class DoSomething extends Print {
  construct() {}
  print(message: string) {
    console.log(message);
  }
}

const dosth = new DoSomething();
dosth.print('Let do exercise');
