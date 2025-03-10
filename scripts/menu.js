const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuBtn.textContent = menu.classList.contains("open") ? "✖" : "☰";
});
const darkModeBtn = document.getElementById("dark-mode-toggle");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
