//navbar
const navbar = document.querySelector(".header .navbar");
const bar = document.querySelector(".header .nav-toggle-btn");
document.querySelector("#nav-toggle-btn").onclick = () => {
  navbar.classList.toggle("active");
  bar.classList.toggle("active");
};

// navbar background change onScroll
var myNav = document.getElementById("header");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
