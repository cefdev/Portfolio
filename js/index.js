const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile");
const mobileLinks = document.querySelectorAll(".mobile_links a");

let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    // Show the Mobile Menu
    mobileMenu.style.transform = "translateX(0)";
    menuOpen = true;
  } else {
    hamburger.classList.remove("open");
    // Hide the Mobile Menu
    mobileMenu.style.transform = "translateX(100%)";
    menuOpen = false;
  }
});

// Hide the Mobile Menu if user clicked on menu links
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the Mobile Menu
    mobileMenu.style.transform = "translateX(100%)";
    // Turn the Hmaburger to the initial form
    hamburger.classList.remove("open");
    menuOpen = false;
  });
});

// On Scroll, Make the Header's background visible
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).width() >= 415) {
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".header").css({
          background: "#242526",
          "box-shadow": "0 0 5px #00000033",
          transition: "all .5s ease-in-out",
        });
      } else {
        $(".header").css({
          background: "transparent",
          "box-shadow": "0 0 0",
          transition: "all .5s ease-in-out",
        });
      }
    }
  });
});
