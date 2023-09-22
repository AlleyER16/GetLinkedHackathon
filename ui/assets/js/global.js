///////////////////////////////////////////////////////////
// Navigation functionality
const btnNavEl = document.querySelector(".header__toggle-main");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("navbar--open");
});
