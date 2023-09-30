function myCall(context, ...args) {
  context.prop = this;
  context.prop(...args);

  delete context.prop;
}

Function.prototype.myCall = myCall;

var a = "Window Name";

function foo() {
  console.log(this.a);
}

foo();
foo();
foo.myCall({ a: "Context Name" });
