"use strict";

(function () {
  var MOBILE_WIDTH = 1024;
  var navResizeObserver;

  function updateContentOffset() {
    var nav = document.getElementById("nav");
    var content = document.querySelector(".content");
    var navPrimary = document.getElementById("nav-primary");
    var header = nav ? nav.querySelector(".navbar-header") : null;
    var navHeight = 0;
    var navTop;
    var navBottom;
    var measuredBottom = 0;
    var measuredNodes;
    var gap;
    var i;
    var rect;

    if (!nav || !content) {
      return;
    }

    navTop = nav.getBoundingClientRect().top;

    // Keep content offset stable on mobile when the menu drawer is expanded.
    if (window.innerWidth <= MOBILE_WIDTH && navPrimary && navPrimary.classList.contains("in") && header) {
      navBottom = header.getBoundingClientRect().bottom;
      navHeight = navBottom - navTop;
    } else {
      measuredNodes = [nav, header, navPrimary, nav ? nav.querySelector(".navbar-nav") : null];
      for (i = 0; i < measuredNodes.length; i += 1) {
        if (!measuredNodes[i]) {
          continue;
        }
        rect = measuredNodes[i].getBoundingClientRect();
        if (rect.bottom > measuredBottom) {
          measuredBottom = rect.bottom;
        }
      }
      navHeight = measuredBottom - navTop;
    }

    gap = window.innerWidth <= MOBILE_WIDTH ? 16 : 20;
    content.style.paddingTop = Math.ceil(Math.max(navHeight, 0) + gap) + "px";
  }

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
    updateContentOffset();
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
      updateContentOffset();
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
      updateContentOffset();
    });
  }

  function bindNavResizeObserver() {
    var nav = document.getElementById("nav");
    var navPrimary = document.getElementById("nav-primary");
    var header = nav ? nav.querySelector(".navbar-header") : null;

    if (!nav || typeof ResizeObserver === "undefined") {
      return;
    }

    navResizeObserver = new ResizeObserver(function () {
      updateContentOffset();
    });
    navResizeObserver.observe(nav);
    if (navPrimary) {
      navResizeObserver.observe(navPrimary);
    }
    if (header) {
      navResizeObserver.observe(header);
    }
  }

  window.addEventListener("scroll", updateNavState, { passive: true });
  document.addEventListener("DOMContentLoaded", function () {
    updateNavState();
    bindMobileToggle();
    bindNavResizeObserver();
    updateContentOffset();
    window.setTimeout(updateContentOffset, 150);
    window.setTimeout(updateContentOffset, 600);
  });
  window.addEventListener("load", updateContentOffset);
})();
