function solve() {
   const addButtnEls = [...document.querySelectorAll('.product .product-add')];
   const textAreaE = document.getElementsByTagName('textarea')[0];
   const checkoutBttnE = document.querySelector('.checkout');

   const shoppingCart = [];

   addButtnEls.forEach((addBttn) => {
      addBttn.addEventListener('click', (e) => {
         const porductNameE = e.currentTarget.parentNode.querySelector('.product-title');
         const productPriceE = e.currentTarget.parentNode.querySelector('.product-line-price');

         const foundProduct = shoppingCart.find((product) => product['name'] === porductNameE.textContent);
         let outputMssg = '';

         if (foundProduct !== undefined) {

            foundProduct['qty']++;
            outputMssg = `Added ${foundProduct.name} for ${(foundProduct.price).toFixed(2)} to the cart.\n`;

         } else {

            const newProduct = {
               name: porductNameE.textContent,
               price: Number(productPriceE.textContent),
               qty: 1,
            };

            shoppingCart.push(newProduct);
            outputMssg = `Added ${newProduct.name} for ${(newProduct.price).toFixed(2)} to the cart.\n`
         }

         textAreaE.textContent = textAreaE.textContent.concat(outputMssg);
      });
   });

   const calculateTotal = (shoppingCart) => shoppingCart.reduce(((acc, curr) => {
      acc += (curr['price'] * curr['qty']);
      return acc;
   }), 0)

   const dissableAllButtons = () => {
      const buttons = [...document.getElementsByTagName('button')];
      buttons.map((button) => {
         button.setAttribute('disabled', true);
      })
   };

   checkoutBttnE.addEventListener('click', (e) => {

      const totalPrice = calculateTotal(shoppingCart);

      let boughtProductNames = shoppingCart.reduce((acc, curr) => {
         acc.push(curr['name']);
         return acc;
      }, [])

      textAreaE.textContent = textAreaE.textContent.concat(`You bought ${boughtProductNames.join(', ')} for ${totalPrice.toFixed(2)}.`);
      dissableAllButtons();
   })
}