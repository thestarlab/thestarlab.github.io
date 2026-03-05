"use strict";

(function () {
  function updateNavState() {
    var nav = document.getElementById("nav");
    if (!nav) {
      return;
    }

    var scrolled = window.scrollY > 2;
    nav.classList.toggle("scrolled", scrolled);
    nav.classList.toggle("unscrolled", !scrolled);
  }

  window.addEventListener("scroll", updateNavState, { passive: true });
  document.addEventListener("DOMContentLoaded", updateNavState);
})();
