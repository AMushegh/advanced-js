const obj = {
  fullName: "Mushegh",
  printName: function () {
    console.log(this.fullName);
  },
};

const foo = obj.printName;

// foo();
// obj.printName();

class A {
  method = () => console.log(this);
}

const a = new A();
a.method();
