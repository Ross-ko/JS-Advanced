function add(number) {
  return function (additive) {
    return number + additive;
  };
}

let add9 = add(9);
console.log(add9(5));
console.log(add9(47));
console.log(add9(2134));

let add13 = add(13);
console.log(add13(432));
console.log(add13(-4));
console.log(add13(0));
