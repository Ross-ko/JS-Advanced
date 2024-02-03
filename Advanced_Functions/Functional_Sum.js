function functionalSum(num) {
  let sum = num;

  function calculator(num2) {
    sum += num2;
    return calculator;
  }

  calculator.toString = () => sum;
  return calculator;
}

console.log(Number(functionalSum(6)(7)));
console.log('---------');
console.log(functionalSum(8)(45).toString());
