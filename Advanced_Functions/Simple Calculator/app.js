function calculator() {
  let numberOne;
  let numberTwo;
  let result;

  function init(selector1, selector2, resultSelector) {
    numberOne = document.querySelector(selector1);
    numberTwo = document.querySelector(selector2);
    result = document.querySelector(resultSelector);

    // the task is written to meet my homework expectations and don't work with the index.HTML file.
  }

  function add() {
    result.value = Number(numberOne.value) + Number(numberTwo.value);
  }

  function subtract() {
    result.value = Number(numberOne.value) - Number(numberTwo.value);
  }

  return { init, add, subtract };
}
