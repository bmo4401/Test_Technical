/* 
#name -> private
.name -> protected
*/
/* 4 tính chất OOP 
  - Tính đóng gói: giúp bạn che giấu được những thông tin bên trong đối tượng
  - Kế thừa: kế thừa những thuộc tính và phương thức của một
  - Trừu tượng:
  - Đa hình: 2 func với tên giống nhau nhưng có 2 loại return khác nhau tùy vào parameters truyền vào
*/

class People {
  name: string;
  _age: number;
  static count: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
    People.count++;
  }
  print() {
    console.log(this.name + ' ' + this._age);
  }
}

const me = new People('Hai', 20);
console.log(me.name);
me.print();
/* class Teacher extends People {
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
dosth.print('Let do exercise'); */
