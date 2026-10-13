let cart = [];

function orderNow() {
    alert("Thank you for choosing Food Haven! 🍕 Your order process will start soon.");
}
function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }

    alert("🎉 Order placed successfully!\nThank you for ordering from Food Haven!");

    cart = [];

    displayCart();
}

function addToCart(foodName, price) {

    // Check if item is already in cart
    let existingItem = cart.find(item => item.name === foodName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: foodName,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}

function increaseQuantity(index) {

    cart[index].quantity++;

    displayCart();
}

function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }

    cart[index].quantity--;

    if (cart[index].quantity === 0) {
        cart.splice(index, 1);
    }

    displayCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        let li = document.createElement("li");

        let itemTotal = item.price * item.quantity;

        li.innerHTML = `
            ${item.name} - ₹${itemTotal}

            <button onclick="decreaseQuantity(${index})">−</button>

            ${item.quantity}

            <button onclick="increaseQuantity(${index})">+</button>

            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(li);

        total = total + itemTotal;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}
function confirmOrder() {

    let name = document.getElementById("customer-name").value;
    let phone = document.getElementById("customer-phone").value;
    let address = document.getElementById("customer-address").value;

    if (name === "" || phone === "" || address === "") {
        alert("Please fill in all delivery details.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }
    let orderId = "FH" + Math.floor(1000 + Math.random() * 9000);

alert(
    "🎉 Order confirmed!\n\n" +
    "Thank you, " + name + "!\n" +
    "Order ID: " + orderId + "\n" +
    "🛵 Estimated delivery: 30–40 minutes"
);

    
    cart = [];

    displayCart();

    document.getElementById("customer-name").value = "";
    document.getElementById("customer-phone").value = "";
    document.getElementById("customer-address").value = "";
}
function clearCart() {

    if (cart.length === 0) {
        alert("Your cart is already empty! 🛒");
        return;
    }

    cart = [];

    displayCart();

    alert("Cart cleared successfully! 🛒");
}
function searchFood() {

    let searchText = document.getElementById("search-food").value.toLowerCase();

    let foodCards = document.querySelectorAll(".food-card");

    foodCards.forEach(function(card) {

        let foodName = card.querySelector("h3").innerText.toLowerCase();

        if (foodName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
