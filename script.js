// Ensure navbar is visible on scroll
document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
  
  // Smooth scroll for anchor links (if needed)
  document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  