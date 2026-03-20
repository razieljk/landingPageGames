/* ============================================
   PARTÍCULAS FLOTANTES
   ============================================ */

const pContainer = document.getElementById('particles');
const colors = ['#FFD700', '#00F5FF', '#FF00A0', '#8B00FF', '#fff'];

for (let i = 0; i < 35; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left              = Math.random() * 100 + '%';
  p.style.background        = colors[Math.floor(Math.random() * colors.length)];
  p.style.animationDuration = (6 + Math.random() * 12) + 's';
  p.style.animationDelay    = (Math.random() * 15) + 's';
  p.style.width             = p.style.height = (2 + Math.random() * 4) + 'px';
  pContainer.appendChild(p);
}
