const products = [
  { name: "Ikan Cupang Hias", price: 25000, img: "https://images.unsplash.com/photo-1599447421416-457c43ec3dfe", desc: "Ikan cupang warna-warni, cocok untuk aquarium kecil." },
  { name: "Aquarium Mini LED", price: 120000, img: "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98", desc: "Aquarium mini dengan lampu LED biru elegan." },
  { name: "Filter Air Ultra", price: 75000, img: "https://images.unsplash.com/photo-1614245486564-bc3a6a142bdf", desc: "Filter air kuat dan hemat energi." },
  { name: "Pakan Ikan Premium", price: 30000, img: "https://images.unsplash.com/photo-1611915387288-9906a460df7a", desc: "Makanan ikan bergizi tinggi untuk warna cerah." },
  { name: "Lampu Aquarium LED Biru", price: 85000, img: "https://images.unsplash.com/photo-1587560699334-cc4ff6349094", desc: "Lampu LED waterproof, hemat daya." },
  { name: "Dekorasi Batu Karang", price: 50000, img: "https://images.unsplash.com/photo-1620912189866-7041e8f435f7", desc: "Dekorasi alami untuk tampilan aquarium tropis." },
];

const productList = document.getElementById("product-list");
const cartModal = document.getElementById("cart-modal");
const productModal = document.getElementById("product-modal");
const cartBtn = document.getElementById("cart-btn");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const closeCart = document.getElementById("close-cart");
const checkoutBtn = document.getElementById("checkout-btn");

const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const modalAdd = document.getElementById("modal-add");
const modalClose = document.getElementById("modal-close");

let cart = [];
let currentProduct = null;

// Render produk
products.forEach((p, i) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Rp${p.price.toLocaleString()}</p>
    <button>Tambah ke Keranjang</button>
  `;
  card.querySelector("button").addEventListener("click", e => {
    e.stopPropagation();
    addToCart(i);
  });
  card.addEventListener("click", () => openProductModal(i));
  productList.appendChild(card);
});

// Tampilkan detail produk
function openProductModal(index) {
  const p = products[index];
  currentProduct = p;
  modalImg.src = p.img;
  modalName.textContent = p.name;
  modalPrice.textContent = "Rp" + p.price.toLocaleString();
  modalDesc.textContent = p.desc;
  productModal.style.display = "flex";
}

// Tutup modal produk
modalClose.addEventListener("click", () => {
  productModal.style.display = "none";
});

// Tambah produk dari modal
modalAdd.addEventListener("click", () => {
  if (currentProduct) {
    cart.push(currentProduct);
    updateCart();
    productModal.style.display = "none";
  }
});

// Tambah ke keranjang langsung
function addToCart(i) {
  cart.push(products[i]);
  updateCart();
}

// Update keranjang
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toLocaleString();
  cartCount.textContent = cart.length;
}

// Keranjang
cartBtn.addEventListener("click", () => cartModal.style.display = "flex");
closeCart.addEventListener("click", () => cartModal.style.display = "none");

checkoutBtn.addEventListener("click", () => {
  alert("Terima kasih sudah berbelanja di AquaShop! 😄");
  cart = [];
  updateCart();
  cartModal.style.display = "none";
});
