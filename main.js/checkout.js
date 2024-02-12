// Parse the cart items from the URL parameter const urlParams = new
URLSearchParams(window.location.search); const cartItems = urlParams.get('items'); const parsedItems = cartItems ? cartItems.split(',') : []; // Display cart items const cartItemsList =
document.getElementById('cartItems'); parsedItems.forEach(item => { const
listItem = document.createElement('li'); listItem.textContent = item;
cartItemsList.appendChild(listItem); }); function processPayment() { const
paymentMethod = document.getElementById('paymentMethod').value;
alert(`Payment processed using ${paymentMethod}. Thank you for your
purchase!`); // You can add additional logic here, such as sending paymentinformation to a server. 
}