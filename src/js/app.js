("use strict");
import "../scss/main.scss";
import "@babel/polyfill";
import "./components/Validation";
let _ = require("lodash");

//menu hamburger
let menu = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
menu.addEventListener("click", function() {
	this.classList.toggle("hamburger--active");
    nav.classList.toggle("active");
  }, false);

//scroll to section
$(".nav_link, .btn-projects").click(function(e) {
  e.preventDefault();
  $(".nav_link").removeClass("active");
  $(this).addClass("active");
  let position = $($(this).attr("href")).offset().top - 50;
  $("body, html").animate({ scrollTop: position }, 800);
  nav.classList.remove("active");
  menu.classList.remove("hamburger--active");
});

//fixed menu
$(window).scroll(function() {
  if (window.innerWidth >= 1024) {
    $(window).scrollTop() >= 200
      ? $(".header_top").addClass("fixed-header")
      : $(".header_top").removeClass("fixed-header");
  }
});

//lazy loading
let lazyImages = [...document.querySelectorAll("img")];

const lazyLoad = () => {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset) {
      image.src = image.dataset.src;
    }
  });
};

window.addEventListener("scroll", _.throttle(lazyLoad));
window.addEventListener("resize", _.throttle(lazyLoad));

//close modal
window.addEventListener("DOMContentLoaded", () => {
  if ($(".modal").length) {
    document.querySelector(".modal").addEventListener("click", function() {
      this.remove();
    });
  } else {
    return null;
  }
});