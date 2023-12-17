class Parent {
  #prop = 18;
  constructor() {
    this.value = 42;
  }

  #testMethod() {
    console.log(this.value);
  }
}
class Child extends Parent {
  constructor() {
    super();
    this.value = 21;
  }
}
const child = new Child();
