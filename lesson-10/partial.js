function add(x, y) {
  return x + y;
}

function addOne(x) {
  return add(x, 1);
}

const a = add(7, 8);
const b = addOne(8);

console.log(a, b);
