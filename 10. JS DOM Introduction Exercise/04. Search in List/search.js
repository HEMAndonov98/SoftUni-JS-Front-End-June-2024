function search() {
   const towns = document.getElementById('towns').children;
   const inputText = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let matches = 0;

   const townsArray = Array.from(towns);

   for (const townItem of townsArray) {

      townItem.style.fontWeight = 'normal';
      townItem.style.textDecoration = 'none';

      if (townItem.textContent.includes(inputText)) {
         townItem.style.fontWeight = 'bold';
         townItem.style.textDecoration = 'underline';
         matches++;
      }
   }

   result.textContent = `${matches} matches found`;
}
