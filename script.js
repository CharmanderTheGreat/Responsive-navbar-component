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
  { name: "Silver Moon", price: "$229", desc: "Moonphase complication, silver dial." },
  { name: "Everyday Steel", price: "$159", desc: "Durable everyday wear watch." },
  { name: "Chrono Sport X", price: "$309", desc: "Multi-function chronograph." },
  { name: "Copper Craft", price: "$219", desc: "Copper-tone case, canvas strap." },
  { name: "Aviator Series", price: "$339", desc: "Pilot-style dial, large face." },
  { name: "Blue Horizon", price: "$249", desc: "Blue dial with steel bracelet." },
  { name: "Grand Classic", price: "$379", desc: "Automatic movement, exhibition back." },
  { name: "Casual Weekend", price: "$149", desc: "Lightweight, everyday casual style." },
  { name: "Executive Gold", price: "$399", desc: "Full gold-tone, premium finish." },
  { name: "Modern Mesh", price: "$269", desc: "Mesh strap with modern square case." }
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