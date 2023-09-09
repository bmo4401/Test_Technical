type Animal = {
   name: string;
};

type Human = {
   age: number;
   gender: string;
};

type AnimalOrHuman<T extends Human | Animal> = T extends Human
   ? { humanName: number }
   : { animalName: string };
const getDisplayFeature = <T extends Animal | Human>(
   item: T,
): AnimalOrHuman<T> => {
   if ('name' in item) {
      return { animalName: item.name } as AnimalOrHuman<T>;
   } else {
      return { humanName: item.age } as AnimalOrHuman<T>;
   }
};

console.log(getDisplayFeature({ gender: 'Hai', age: 20 }));
console.log(getDisplayFeature({ name: 'Hai' }));



const allStrings: Extract<string, number | string> = 'Hello'

