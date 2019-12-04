("use strict");
import "../scss/main.scss";
import "@babel/polyfill";
import "./components/Validation";

let menu = document.querySelector(".hamburger");

menu.addEventListener(
  "click",
  function() {
    this.classList.toggle("hamburger--active");
  },
  false
);
