function create(words) {

   const contentEl = document.getElementById("content");

   for (let word of words) {
      let divEl = document.createElement('div');
      let pEl = document.createElement('p');

      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);
      contentEl.appendChild(divEl);

      divEl.addEventListener('click', clickE)
   }

   function clickE(event) {
      let target = event.currentTarget;
      let elChildren = target.children;
      let paragraph = elChildren[0];
      paragraph.style.display = 'block';
      /* if we want can make them switchable -> */ paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
   }
}