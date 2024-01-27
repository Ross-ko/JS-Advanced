function search() {

   let searchText = document.getElementById("searchText").value;
   let townsEl = document.querySelectorAll("#towns li");
   let result = document.getElementById('result');

   let townsArr = Array.from(townsEl); 
   let counter = 0;

   for (let town of townsArr) {
      if (town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   result.textContent = `${counter} matches found`;
}
