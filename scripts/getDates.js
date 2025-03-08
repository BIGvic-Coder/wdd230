document.addEventListener("DOMContentLoaded", function () {
  // Dynamically set the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Display the last modified date of the document
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
});
