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
