const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    header.classList.toggle("nav-active", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("nav-active");
    document.body.classList.remove("nav-open");
  });
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
