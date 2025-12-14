let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
    let html = "";

    if (cart.length === 0) {
        html = `<div class="container">
  <div class="row  align-items-center">
    <div class="col-12 text-center empty-cart">

      <img src="./images/emptycartgif.gif" alt="Empty cart" class=" Emptycart">

      <h4 class="mt-4 fw-bold">YOUR CART IS EMPTY</h4>
      <p class="text-muted mb-4">Let's find something you'll love</p>

      <a href="index.html" class="shop-btn">
        <i class="bi bi-bag"></i> Continue Shopping
      </a>

    </div>
  </div>
</div>`;
document.getElementById("Shopping").style.display="none";
    }

    cart.forEach((item, index) => {
        html += `
    <div class="row g-4 ">
        <div class="col-lg-8">
            <div class="cart-item d-flex flex-column flex-md-row align-items-center gap-3">
                
                <img src="${item.image}" width="80" alt="product">

                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">100 gm</small>
                </div>

              

                <div class="d-flex align-items-center gap-2">
                    <button class="qty-btn" onclick="decreaseQty(${index})">−</button>
                    <input type="text" id="qty" class="qty-input" value="${item.qty}" readonly>
                    <button class="qty-btn" onclick="increaseQty(${index})">+</button>
                </div>

                <div class="fw-bold">₹ <span id="totalPrice">${item.price * item.qty}</span></div>
            </div>
        </div>


<div class="col-lg-4">
            <div class="summary-card mt-1">
                <div class="d-flex justify-content-between">
                    <h5>Total</h5>
                    <h5>₹ <span id="summaryTotal">${item.price * item.qty}</span></h5>
                </div>

                <small class="text-muted">1 Items</small>

                <div class="mt-2">
                    <span class="badge bg-danger">₹25 OFF</span>
                    <span class="price-old ms-2"></span>
                </div>

                <button class="btn checkout-btn w-100 mt-3">Check Out</button>
         
                </div>
        </div> 
                </div>
</div>
    `;
    });

    document.getElementById("cartitemquantity").innerHTML = html;
}

function increaseQty(index) {
    cart[index].qty++;
    saveCart();
}

function decreaseQty(index) {
    if (cart[index].qty > 1) {
        cart[index].qty--;
        saveCart();
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

updateCart();


function clearCart() {
    localStorage.removeItem("cart");
    location.reload(); // optional
}





