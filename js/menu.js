function toggleMenu() {
  const nav = document.getElementById("site-nav");
  const btn = document.querySelector(".hamburger");

  if (!nav || !btn) return;

  const isOpen = nav.classList.toggle("active");
  btn.classList.toggle("is-active", isOpen);
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

/* Cierra el menú cuando haces click en un link */
document.addEventListener("click", (e) => {
  const nav = document.getElementById("site-nav");
  const btn = document.querySelector(".hamburger");
  if (!nav || !btn) return;

  const clickedLink = e.target.classList && e.target.classList.contains("nav-link");
  if (clickedLink && nav.classList.contains("active")) {
    nav.classList.remove("active");
    btn.classList.remove("is-active");
    btn.setAttribute("aria-expanded", "false");
  }
});

/* Si agrandas a desktop, fuerza cierre */
window.addEventListener("resize", () => {
  const nav = document.getElementById("site-nav");
  const btn = document.querySelector(".hamburger");
  if (!nav || !btn) return;

  if (window.innerWidth > 1024) {
    nav.classList.remove("active");
    btn.classList.remove("is-active");
    btn.setAttribute("aria-expanded", "false");
  }
});
