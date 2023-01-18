// global variables
let srcs = ["assets/imgs/bakery-light-1.png", "assets/imgs/bakery-color.png"];
let searchIcon = document.querySelector(".navbar .icon");
let xIcon = document.querySelector("header .form .icon-x");
let searchForm = document.querySelector("header .form");
let navToggler = document.querySelector(".navbar .navbar-toggler");
let navList = document.querySelector("#navbarSupportedContent");
let navbarItems = document.querySelectorAll(".nav-item a");
let header = document.querySelector("#header");
let navbarBrand = document.querySelector(".navbar-brand");
let up = document.querySelector(".up");
let statsHead = document.querySelectorAll(".stats h5");

// show search input while clicking on icon
searchIcon.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});
// hidden or remove search div
xIcon.addEventListener("click", () => {
  console.log(xIcon.parentElement);
  xIcon.parentElement.classList.remove("active");
});

// show navbar while clicking on bar icon
navToggler.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// add active class to li on navbar
navbarItems.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClass();
    el.classList.add("active");
  });
});
function removeActiveClass() {
  navbarItems.forEach((el) => {
    el.classList.remove("active");
  });
}

window.onscroll = function () {
  if (window.scrollY >= 400) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  up.classList.add("active");
});
///////////////  STATS SECTION /////////////////
window.onscroll = function () {
  if (scrollY > 50) {
    header.classList.add("active");
    navbarBrand.children[0].src = srcs[1];
  } else {
    header.classList.remove("active");
    navbarBrand.children[0].src = srcs[0];
  }
  console.log(window.scrollY);
  if ((window.scrollY >= 1350) & (window.scrollY <= 1400)) {
    scroll();
  }
};
function scroll() {
  let start = 0;
  statsHead.forEach((h) => {
    let end = +h.getAttribute("data-target");
    let target = Math.ceil(end / 100);
    function counter() {
      if (start < end) {
        start += target;
        h.textContent = Math.ceil(start);
        setTimeout(counter, 30);
      } else {
        h.textContent = end;
      }
    }
    console.log(end);
    counter();
  });
}
