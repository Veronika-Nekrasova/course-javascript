function returnNew(number) {
  return function F() {
    return ++number;
  };
}

var f = returnNew(10);

console.log(f());
console.log(f());
console.log(f());
