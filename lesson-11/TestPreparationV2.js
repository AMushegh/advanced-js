const obj = {
  method() {
    console.log(this);
  },
};

obj.method();

var a = obj.method;

// window.a() === a();
