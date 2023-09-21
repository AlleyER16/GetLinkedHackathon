///////////////////////////////////////////////////////////
// Navigation functionality
const btnNavEl = document.querySelector(".header__toggle-main");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("navbar--open");
});

///////////////////////////////////////////////////////////
// Sticky Navigation functionality
const heroSectionEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;

    if (!ent.isIntersecting) {
      headerEl.classList.add("sticky");
    } else {
      headerEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);
