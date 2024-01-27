function solve() {

  const textAreaEl = document.getElementById('input');
  const outputEl = document.getElementById('output');

  let text = textAreaEl.value;
  let sentences = text.split('.').filter(s => s.trim().length > 0);
  let counter = 0;

  for (let i = 0; i < sentences.length; i++) {

    let sentence = sentences[i];
    let paragraph = document.createElement('p');

    counter++;
    paragraph.textContent += sentence + ".";
    
    if (counter == 3 || i == sentences.length - 1) {
      outputEl.appendChild(paragraph);
      paragraph = document.createElement('p');
      counter = 0;
    }
  }
}
