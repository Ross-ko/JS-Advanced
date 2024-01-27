function solve() {

  let textEl = document.getElementById("text").value;
  let conventionEl = document.getElementById("naming-convention").value;

  let resultEl = document.getElementById("result");
  let result = '';

  if (conventionEl == 'Camel Case') {
    let text = textEl.split(' ');
    result = text.shift().toLowerCase();
    for (let word of text) {
      result += word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
  } else if (conventionEl == 'Pascal Case') {
    let text = textEl.split(' ');
    for (let word of text) {
      result += word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
  } else {
    result = "Error!"
  }

  resultEl.textContent = result;
}