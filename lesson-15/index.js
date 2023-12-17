const obj = {
  name: "Mushegh",
  age: 23,
  "my name": 199,
};

// const obj1 = {
//   age: 24,
// };

// const objcopy = { ...obj, ...obj1 };

// console.log(objcopy);

const { name: myName, ...rest } = obj;

// console.log(myName, rest.age);

const obj1 = {
  a: 1,
  b: 2,
};
// const { c: { j = 999 } = { e: 7, d: 5 }, bc = {} } = obj1;

// console.log(j, b);

const arr = [1, 2, 3, [4, 5, 6]];

const [, , a = 7, b] = arr;

const [t, k, o] = b;

// console.log(t, k, o);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6, 7];

const [w, q, ...arr2Rest] = arr2;
// console.log(arr2Rest);

const getName = () => "name";

// console.log(obj[getName()]);
// console.log(obj.getName());
// console.log(obj["my name"]);

function animal(name, type) {
  return {
    name,
    type,
  };
}

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.foo = () => {
  this.name;
};

const animal1 = animal("rabbit", 10);
const animal2 = Animal("rabbit", 10);
