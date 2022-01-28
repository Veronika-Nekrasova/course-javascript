function returnFnresult(fn) {
  const a = fn;
  return a;
}
function fn(k, h) {
  const b = k * h;
  return b;
}
const result = returnFnresult(fn(15, 37));
console.log(result);
