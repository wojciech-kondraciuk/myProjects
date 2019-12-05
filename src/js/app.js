("use strict");
import "../scss/main.scss";
import "@babel/polyfill";
import "./components/Validation";

//menu hamburger
let menu = document.querySelector(".hamburger");
menu.addEventListener(
  "click",
  function() {
    this.classList.toggle("hamburger--active");
  },
  false
);

//scroll to section
$(".nav_link, .btn-projects").click(function(e) {
  e.preventDefault();
  $(".nav_link").removeClass("active");
  $(this).addClass("active");
  let position = $($(this).attr("href")).offset().top - 50;
  $("body, html").animate({ scrollTop: position }, 800);
});

//fixed menu
$(window).scroll(function() {
  $(window).scrollTop() >= 200
    ? $(".header_top").addClass("fixed-header")
    : $(".header_top").removeClass("fixed-header");
});
