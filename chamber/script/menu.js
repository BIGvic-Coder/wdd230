document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    // Toggle between ☰ and ✖
    if (navMenu.classList.contains("open")) {
      menuBtn.textContent = "✖";
    } else {
      menuBtn.textContent = "☰";
    }
  });
});
