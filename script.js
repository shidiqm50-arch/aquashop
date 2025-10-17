// Data produk
const products = [
  { name: "Ikan Cupang Hias", price: 25000, img: "https://images.unsplash.com/photo-1599447421416-457c43ec3dfe" },
  { name: "Aquarium Mini LED", price: 120000, img: "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98" },
  { name: "Filter Air Ultra", price: 75000, img: "https://images.unsplash.com/photo-1614245486564-bc3a6a142bdf" },
  { name: "Pakan Ikan Premium", price: 30000, img: "https://images.unsplash.com/photo-1611915387288-9906a460df7a" },
  { name: "Lampu Aquarium LED Biru", price: 85000, img: "https://images.unsplash.com/photo-1587560699334-cc4ff6349094" },
  { name: "Dekorasi Batu Karang", price: 50000, img: "https://images.unsplash.com/photo-1620912189866-7041e8f435f7" },
];

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const closeCart = document.getElementById("close-cart");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];

// Render produk
products.forEach((p, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Rp${p.price.toLocaleString()}</p>
    <button onclick="addToCart(${index})">Tambah ke Keranjang</button>
  `;
  productList.appendChild(card);
});

// Tambah ke keranjang
function addToCart(i) {
  cart.push(products[i]);
  updateCart();
}

// Update tampilan keranjang
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toLocaleString();
  cartCount.textContent = cart.length;
}

// Tampilkan modal keranjang
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

// Tutup modal
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Tombol checkout
checkoutBtn.addEventListener("click", () => {
  alert("Terima kasih sudah berbelanja di AquaShop! 😄");
  cart = [];
  updateCart();
  cartModal.style.display = "none";
});
