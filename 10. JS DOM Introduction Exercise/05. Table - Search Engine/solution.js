function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputText = document.getElementById('searchField');
      const tableCells = document.querySelectorAll('table>tbody tr');

      const tableRowsArray = Array.from(tableCells);

      for (const row of tableRowsArray) {
         row.classList.remove('select');
         for (const cell of Array.from(row.children)) {
            if (cell.textContent.includes(inputText.value)) {
               row.classList.add('select');
            }
         }
      }
      inputText.value = '';
   }
}