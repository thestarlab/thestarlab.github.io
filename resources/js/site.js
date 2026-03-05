"use strict";

(function () {
  var MOBILE_WIDTH = 767;

  function updateNavState() {
    var nav = document.getElementById("nav");
    if (!nav) {
      return;
    }

    var scrolled = window.scrollY > 2;
    nav.classList.toggle("scrolled", scrolled);
    nav.classList.toggle("unscrolled", !scrolled);
  }

  function closeMobileNav() {
    var navPrimary = document.getElementById("nav-primary");
    var navToggle = document.getElementById("nav-toggle");
    if (!navPrimary || !navToggle) {
      return;
    }

    navPrimary.classList.remove("in");
    navToggle.classList.add("collapsed");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function bindMobileToggle() {
    var navPrimary = document.getElementById("nav-primary");
    var navToggle = document.getElementById("nav-toggle");
    if (!navPrimary || !navToggle) {
      return;
    }

    navToggle.addEventListener("click", function () {
      var isOpen = navPrimary.classList.toggle("in");
      navToggle.classList.toggle("collapsed", !isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navPrimary.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= MOBILE_WIDTH) {
          closeMobileNav();
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > MOBILE_WIDTH) {
        closeMobileNav();
      }
    });
  }

  window.addEventListener("scroll", updateNavState, { passive: true });
  document.addEventListener("DOMContentLoaded", function () {
    updateNavState();
    bindMobileToggle();
  });
})();
