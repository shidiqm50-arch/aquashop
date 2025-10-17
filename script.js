// Data produk
const produk = [
  { nama: "Aquarium Klasik", harga: "Rp 150.000", gambar: "images/hero.jpg" },
  { nama: "Aquarium Biru", harga: "Rp 175.000", gambar: "images/hero.jpg" },
  { nama: "Aquarium Modern", harga: "Rp 200.000", gambar: "images/hero.jpg" }
];

// Tampilkan produk ke halaman
const produkList = document.getElementById("produkList");

produk.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.gambar}" alt="${p.nama}">
    <div class="card-body">
      <h3>${p.nama}</h3>
      <p class="price">${p.harga}</p>
    </div>
  `;
  produkList.appendChild(card);
});
