const projects = [
  {
    title: "Fitspot",
    description: "This is the description for Card 1",
    url: "test1.html",
  },
  {
    title: "QR code as business card",
    description:
      "This is the description for Cs the desthe description for Cs the desthe description for Cs the desthe description for Cs the description for Cs the description for Cs the description for Card 2",
    url: "test2.html",
  },
  {
    title: "Websocket Robotcontroller",
    description: "This is the description for Card 3",
    url: "test3.html",
  },
];

// Get the container element where the cards will be rendered
const projectContainer = document.getElementById("project-list");

let html = "";

projects.forEach((card) => {
  html += `
    <div class="project-card">
    <a class="card-title"  href="stijnvanderpouw.com/projects/${card.url}">
    ${card.title}
    <div class="card-description">${card.description}</div>
      </a>
    </div>
  `;
});

projectContainer.innerHTML = html;
// TODO: disable horizontal scrolling
projectContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  projectContainer.scrollLeft += evt.deltaY;
});
