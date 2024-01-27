function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRowsEl = document.querySelectorAll('tbody tr');
   const searchFieldEl = document.getElementById('searchField');

   function onClick() {

      let searchText = searchFieldEl.value;
      
      for (let tableRow of tableRowsEl) {
         tableRow.classList.remove("select");
         searchFieldEl.value = '';
         if (tableRow.textContent.includes(searchText)){
            tableRow.classList.add("select");
         }
      }
   }
}