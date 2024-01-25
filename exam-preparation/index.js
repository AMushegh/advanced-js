function myMap(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
}

Array.prototype.myMap = myMap;

const a = [1, 2, 3, 4].map((el, i) => {
  console.log(i);
  return el + 1;
});

const b = [1, 2, 3, 4].myMap((el, i) => {
  console.log(i);
  return el + 1;
});

console.log(a, b);
