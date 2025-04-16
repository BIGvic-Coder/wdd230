async function displaySpotlights() {
  const response = await fetch("chamber/members.json"); // Ensure this path is correct
  const data = await response.json();

  // Filter members by Gold or Silver membership
  const members = data.members.filter(
    (member) =>
      member.membership.toLowerCase() === "gold" ||
      member.membership.toLowerCase() === "silver"
  );

  console.log("Filtered Members:", members); // Log filtered members

  // Randomly select 2 to 3 members
  const randomMembers = [...members]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  console.log("Random Members:", randomMembers); // Log random members

  const container = document.getElementById("spotlights");

  // Create and append spotlight cards
  randomMembers.forEach((member) => {
    const card = document.createElement("div");
    card.className = "spotlight";
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="chamber/Images/${member.image}" alt="${member.name} logo">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

displaySpotlights();
