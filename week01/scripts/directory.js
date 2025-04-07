const container = document.getElementById("directory");
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");

fetch("data/members.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => {
    displayMembers(data.members);
  })
  .catch((error) => {
    console.error("Error loading members:", error);
  });

function displayMembers(members) {
  container.innerHTML = ""; // Clear previous content

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("member");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <p class="level">${member.membership} Member</p>
    `;

    container.appendChild(card);
  });
}

// Toggle Views
gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
  console.log("Grid View Selected");
});

listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
  console.log("List View Selected");
});
