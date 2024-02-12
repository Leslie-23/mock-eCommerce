
URLSearchParams(window.location.search); const cartItems = urlParams.get('items'); 
const parsedItems = cartItems ? cartItems.split(',') : [];

document.getElementById('cartItems'); parsedItems.forEach(item => {
  const listItem = document.createElement('li'); listItem.textContent = item;
cartItemsList.appendChild(listItem); }); 

function processPayment() { const
paymentMethod = document.getElementById('paymentMethod').value;
                           
alert(`Payment processed using ${paymentMethod}. Thank you for your
purchase!`);  
}
