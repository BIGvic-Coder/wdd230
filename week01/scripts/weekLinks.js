document.addEventListener("DOMContentLoaded", () => {
  const linksData = [
    {
      label: "Week 01",
      url: "https://bigvic-coder.github.io/wdd230/week01/index.html",
    },
    {
      label: "Week 02",
      url: "https://bigvic-coder.github.io/wdd230/week02/index.html",
    },
    {
      label: "Week 03",
      url: "https://bigvic-coder.github.io/wdd230/week03/index.html",
    },
    {
      label: "Week 04",
      url: "https://bigvic-coder.github.io/wdd230/week04/index.html",
    },
    {
      label: "Week 05",
      url: "https://bigvic-coder.github.io/wdd230/week05/index.html",
    },
    // Add more weeks if needed
  ];

  const container = document.getElementById("links-container");

  if (container) {
    const ul = document.createElement("ul");

    linksData.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      a.target = "_blank";
      li.appendChild(a);
      ul.appendChild(li);
    });

    container.appendChild(ul);
  } else {
    console.warn("No container found for weekly links!");
  }
});
