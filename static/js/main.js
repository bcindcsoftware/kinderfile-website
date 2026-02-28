// KinderFile — main.js
// Hamburger menu, smooth scroll, form handling

(function () {
  "use strict";

  // --- Mobile menu toggle ---
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("is-open");
    });

    // Close menu when a link is clicked
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href").substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // --- Form submission handling ---
  var form = document.querySelector(".signup__form");
  var success = document.querySelector(".signup__success");

  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var formData = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(function (response) {
          if (response.ok) {
            form.hidden = true;
            success.hidden = false;
          } else {
            alert("Something went wrong. Please try again or email us directly.");
          }
        })
        .catch(function () {
          alert("Something went wrong. Please try again or email us directly.");
        });
    });
  }
})();
