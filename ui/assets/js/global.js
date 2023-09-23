// Utility functions
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

///////////////////////////////////////////////////////////
// Navigation functionality
const btnNavEl = document.querySelector(".header__toggle-main");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("navbar--open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling functionality because of safari does not
// support the css property scroll-behavior: smooth
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const scrollEl = document.querySelector(href);
        window.scroll({
          top: scrollEl.offsetTop - convertRemToPixels(8.2),
          behavior: "smooth",
        });
      }
    } else {
      window.location = href;
    }

    if (link.classList.contains("header__navbar-link")) {
      headerEl.classList.toggle("navbar--open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation functionality
const heroSectionEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;

    if (!ent.isIntersecting) {
      headerEl.classList.add("sticky");
      heroSectionEl.classList.add("sticky");
    } else {
      headerEl.classList.remove("sticky");
      heroSectionEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${convertRemToPixels(8.2)}px`,
  }
);
obs.observe(heroSectionEl);
