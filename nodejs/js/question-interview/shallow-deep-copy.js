/* shallow copy */
const ob1 = {
  name: 'V1',
  additional: {
    name: 'AV1',
  },
};

const shallowCopy1 = { ...ob1 };
const shallowCopy2 = Object.assign({}, ob1);
shallowCopy1.name = 'V2';
shallowCopy1.additional.name = 'AV2';
console.log({ ob1 }); //V1, AV2
console.log({ shallowCopy1 }); //V2, AV2
console.log({ shallowCopy2 });

/* deep copy */
const deepCopy = JSON.parse(JSON.stringify(ob1));
deepCopy.name = 'Deep Copy V1';
deepCopy.additional.name = 'Additional Deep Copy V1';
console.log({ ob1 });
console.log({ deepCopy });
