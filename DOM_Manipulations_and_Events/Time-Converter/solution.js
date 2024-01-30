function attachEventsListeners() {
  const buttons = document.querySelectorAll("input[type=button]");

  for (let btn of buttons) {
    btn.addEventListener("click", converter);
  }

  function converter(event) {
    let content = event.currentTarget.parentElement.children[1];
    let input = Number(content.value);
    let inputType = content.id;

    if (inputType == "days") {
      timeCalculator(input);
    } else if (inputType == "hours") {
      timeCalculator(input / 24);
    } else if (inputType == "minutes") {
      timeCalculator(input / 24 / 60);
    } else if (inputType == "seconds") {
      timeCalculator(input / 24 / 60 / 60);
    }
  }
  function timeCalculator(input) {
    let inputs = Array.from(document.querySelectorAll("input[type=text]"));
    inputs[0].value = input;
    inputs[1].value = input * 24;
    inputs[2].value = input * 24 * 60;
    inputs[3].value = input * 24 * 60 * 60;
  }
}
