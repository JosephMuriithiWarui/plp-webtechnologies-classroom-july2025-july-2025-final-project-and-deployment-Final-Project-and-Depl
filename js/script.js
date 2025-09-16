// Mobile Menu Toggle with Outside Click Close
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  // Toggle menu on hamburger click
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering outside click
    navMenu.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("show") && !navMenu.contains(e.target) && e.target !== menuToggle) {
      navMenu.classList.remove("show");
    }
  });

  // Close menu when clicking a nav link
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
});

