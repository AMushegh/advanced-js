// const obj = {
//   someMethodArrow: () => {
//     console.log(this);
//   },

//   someMethodRegular() {
//     console.log(this);
//   },
// };

// obj.someMethodArrow();
// obj.someMethodRegular();

function foo() {
  const obj = {
    method: () => {
      console.log(this);
    },
  };

  obj.method();
}

foo();

const temp = {
  name: "lav anun",
  foo: foo,
};

temp.foo();
