const banner = document.getElementById("banner");
const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

if (today >= 1 && today <= 3) {
  banner.style.display = "block";
}
