let cart = [];
let cartCountSpan = document.getElementById('cart-count')
function addToCart(item){
    cart.push(item);
    updateCartCount();
   /*  alert(`${item} added to the Cart`); */
}
function checkOut(){
    if(cart.length === 0 ){
        alert("Your cart is empty. Add items before Checking out.")
    }
  else {
    const checkOutDetails = encodeURIComponent(cart.join(', '));
    window.location.href = `checkout.html?items=${checkOutDetails}`;
}



function updateCartCount(){
  cartCountSpan.textContent = cart.length;
}
}
    
    /* else {
        // Create a new page with checkout details
        const checkoutPage = document.createElement('div');
        checkoutPage.innerHTML = `
          <h2>Checkout</h2>
          <p>Items in your cart:</p>
          <ul>${cart.map(item => <li>${item}</li>).join('')}</ul>
          <p>Select a payment method:</p>
          <select id="paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button onclick="processPayment()">Process Payment</button>
        `;
  
        // Append the new page to the body
        document.body.innerHTML = '';
        document.body.appendChild(checkoutPage);
      }
    }
  
    function processPayment() {
      const paymentMethod = document.getElementById('paymentMethod').value;
      alert(`Payment processed using ${paymentMethod}. Thank you for your purchase!`);
    } 
    */