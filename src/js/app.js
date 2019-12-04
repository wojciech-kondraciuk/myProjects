("use strict");
import "../scss/main.scss";
import "@babel/polyfill";

let menu = document.querySelector(".hamburger");

menu.addEventListener(
  "click",
  function() {
    this.classList.toggle("hamburger--active");
  },
  false
);
