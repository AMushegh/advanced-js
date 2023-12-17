const obj1 = {
  a: 1,
  b: 2,
  c: {},
};

const obj2 = { ...obj1 };
console.log(obj1 === obj2);
console.log(obj1.c === obj2.c);
