document.addEventListener("DOMContentLoaded", function () {
  // Lazy Loading Images
  const lazyImages = document.querySelectorAll("img.lazy");
  console.log("Lazy images found:", lazyImages.length);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          console.log("Loading image:", img);
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.1 }
  );

  lazyImages.forEach((img) => {
    observer.observe(img);
  });

  // Visitor Info Logic
  const visitMessage = document.querySelector("#visitMessage");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = Date.now();

  if (!lastVisit) {
    visitMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceLastVisit = Math.floor(
      (currentVisit - lastVisit) / (1000 * 60 * 60 * 24)
    );
    if (daysSinceLastVisit < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${
        daysSinceLastVisit === 1 ? "day" : "days"
      } ago.`;
    }
  }

  localStorage.setItem("lastVisit", currentVisit);
});
