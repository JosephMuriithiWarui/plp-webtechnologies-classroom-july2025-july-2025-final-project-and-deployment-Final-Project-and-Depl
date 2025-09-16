 const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const navLinks = nav.querySelectorAll("a");

    // Toggle nav open/close
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    // Close nav when clicking a link
    navLinks.addEventListener("click", ()  => {
        nav.classList.remove("open");
    });