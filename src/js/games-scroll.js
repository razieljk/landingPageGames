/* ============================================
   SCROLL HORIZONTAL DE JUEGOS
   ============================================ */

const track = document.getElementById("gamesTrack");
const fill = document.getElementById("gamesFill");
const label = document.getElementById("gamesLabel");

// Animación escalonada de tarjetas
document.querySelectorAll(".game-card").forEach((card, i) => {
  card.style.animationDelay = i * 0.1 + 0.2 + "s";
});

// Scroll con la rueda del ratón
track.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    track.scrollLeft += e.deltaY * 1.2;
  },
  { passive: false },
);

// Drag to scroll
let isDragging = false;
let startX, scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  track.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  track.classList.remove("dragging");
});

track.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  track.scrollLeft = scrollLeft - (x - startX) * 1.2;
});

// Barra de progreso + estado flechas
function updateScroll() {
  const max = track.scrollWidth - track.clientWidth;
  const pct = max > 0 ? track.scrollLeft / max : 0;

  fill.style.width = 16 + pct * 84 + "%";

  const num = Math.min(6, Math.floor(pct * 6) + 1);
  label.textContent = "0" + num + " / 06";

  arrowLeft.classList.toggle("hidden", track.scrollLeft <= 0);
  arrowRight.classList.toggle("hidden", track.scrollLeft >= max - 2);
}

track.addEventListener("scroll", updateScroll);

// Flechas
const arrowLeft = document.getElementById("gamesArrowLeft");
const arrowRight = document.getElementById("gamesArrowRight");

const SCROLL_STEP = 420;

arrowLeft.addEventListener("click", () => {
  track.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
});

arrowRight.addEventListener("click", () => {
  track.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
});

// Estado inicial
updateScroll();
