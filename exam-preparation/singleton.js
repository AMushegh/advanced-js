class Singleton {
  static getInstance() {}

  method() {}
}

// 1. static method for getting instance
const instance = Singleton.getInstance();

// ----------------------------------------

class Person {
  static getInstance() {
    //...
  }

  // logic

  walk() {
    console.log("walking");
  }
}

const person = Person.getInstance();
const person1 = Person.getInstance();

console.log(person === person1); // true
person.walk();
