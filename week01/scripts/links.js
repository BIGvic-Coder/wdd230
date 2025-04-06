const baseURL = "https://bigvic-coder.github.io/wdd230/chamber/"; // Replace with your root URL
const linksURL = "data/links.json"; // The path to the links.json file

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById("links-container");
  linksContainer.innerHTML = ""; // Clear any existing content

  weeks.forEach((week) => {
    const weekSection = document.createElement("section");
    const weekTitle = document.createElement("h3");
    weekTitle.textContent = week.week;
    weekSection.appendChild(weekTitle);

    const linkList = document.createElement("ul");
    week.links.forEach((link) => {
      const listItem = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;
      listItem.appendChild(linkElement);
      linkList.appendChild(listItem);
    });

    weekSection.appendChild(linkList);
    linksContainer.appendChild(weekSection);
  });
}

// Fetch the links when the page loads
getLinks();
