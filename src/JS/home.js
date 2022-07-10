const navHamburger = document.querySelector(".nav__hamburger");
const backDrop = document.querySelector(".nav__backdrop");
const navItems = document.querySelector(".nav__items");

navHamburger.addEventListener("click", () => {
  navHamburger.style.display = "none";
  backDrop.style.display = "block";
  navItems.style.display = "flex";
});

backDrop.addEventListener("click", () => {
  navHamburger.style.display = "block";
  backDrop.style.display = "none";
  navItems.style.display = "none";
});
