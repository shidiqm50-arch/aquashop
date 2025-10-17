// Produk — ubah path gambar jika berbeda
const products = [
  { id:1, name:"Aquarium Classic Pink", price:135000, img:"images/prod1.jpg", desc:"Aquarium kecil elegan. Termasuk lampu LED." },
  { id:2, name:"Aquarium Blue Edition", price:150000, img:"images/prod2.jpg", desc:"Desain minimalis, layar jernih." },
  { id:3, name:"Aquarium Night", price:165000, img:"images/prod3.jpg", desc:"Cocok untuk dekorasi meja." }
];

const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');
const addToCartBtn = document.getElementById('addToCart');

const cartBtn = document.getElementById('cartBtn');
const cartPanel = document.getElementById('cart');
const closeCart = document.getElementById('closeCart');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');

let cart = [];
let current = null;

// render grid
function renderProducts(){
  productGrid.innerHTML = '';
  products.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-media"><img src="${p.img}" alt="${p.name}"></div>
      <div class="card-body">
        <h4 class="card-title">${p.name}</h4>
        <div class="card-price">Rp ${p.price.toLocaleString()}</div>
      </div>
    `;
    card.addEventListener('click', ()=> openModal(p));
    productGrid.appendChild(card);
  });
}

// modal
function openModal(p){
  current = p;
  modalImg.src = p.img;
  modalName.textContent = p.name;
  modalPrice.textContent = 'Rp ' + p.price.toLocaleString();
  modalDesc.textContent = p.desc;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
}
modalClose.addEventListener('click', ()=> { modal.style.display='none'; modal.setAttribute('aria-hidden','true'); });

// cart interactions
function addToCart(){
  if(!current) return;
  cart.push(current);
  updateCartUI();
  modal.style.display='none';
}
addToCartBtn.addEventListener('click', addToCart);

cartBtn.addEventListener('click', ()=> {
  cartPanel.classList.toggle('open');
});

closeCart && closeCart.addEventListener('click', ()=> cartPanel.classList.remove('open'));

// update cart UI
function updateCartUI(){
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach((it, idx)=>{
    total += it.price;
    const li = document.createElement('li');
    li.textContent = `${it.name} — Rp ${it.price.toLocaleString()}`;
    cartItemsEl.appendChild(li);
  });
  cartTotalEl.textContent = total.toLocaleString();
  cartCountEl.textContent = cart.length;
}

// init
renderProducts();
