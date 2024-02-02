function fibonacci() {
  let x = 0;
  let y = 1;

  return function () {
    let nextFibNum = x + y;
    x = y;
    y = nextFibNum;
    return x;
  }
}

let fib = fibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
