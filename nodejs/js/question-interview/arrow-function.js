/* const arrowFc = () => {
  const a = 3;
  console.log('From arrow fc', arguments);
};
 arrowFc(); 
const declareFc = function () {
  const a = 3;
  console.log('From declare fc', arguments);
};
declareFc();

const ob = {
  a: 3,
  arrow: () => {
    console.log(this.a);
  },
  regular() {
    console.log(this.a);
  },
};

ob.arrow();
ob.regular(); */

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
  console.log(this);
}

function setBrand(brand) {
  Car.call(this, 'convertible', 'petrol');
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.call(this, 'convertible', 'diesel');
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
