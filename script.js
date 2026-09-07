// Watch data — 20 items, using images/image1.jpeg to image20.jpeg
const watches = [
  { name: "Classic Steel", price: "$249", desc: "Stainless steel case with leather strap." },
  { name: "Minimal Gold", price: "$319", desc: "Gold-plated finish with minimalist dial." },
  { name: "Sport Chrono", price: "$279", desc: "Chronograph dial, water-resistant design." },
  { name: "Vintage Leather", price: "$199", desc: "Retro-inspired with genuine leather band." },
  { name: "Midnight Black", price: "$259", desc: "Matte black case with sapphire crystal." },
  { name: "Rose Elegance", price: "$289", desc: "Rose gold tone with mesh strap." },
  { name: "Diver Pro", price: "$349", desc: "200m water resistance, rotating bezel." },
  { name: "Urban Slim", price: "$179", desc: "Ultra-thin case, minimalist design." },
  { name: "Heritage Classic", price: "$299", desc: "Roman numeral dial, leather strap." },
  { name: "Titanium Edge", price: "$369", desc: "Lightweight titanium alloy case." },

];

const watchGrid = document.getElementById('watchGrid');

watches.forEach((watch, index) => {
  const card = document.createElement('div');
  card.classList.add('watch-card');
  card.innerHTML = `
    <img src="images/image${index + 1}.jpeg" alt="${watch.name}" loading="lazy">
    <h3>${watch.name}</h3>
    <p class="price">${watch.price}</p>
    <p class="desc">${watch.desc}</p>
  `;
  watchGrid.appendChild(card);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});