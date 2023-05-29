const projects = [
  {
    title: "FIT-SPOT",
    description: "This is the description for Card 1",
    url: "test1.html",
    img: "fit-spot.png",
  },
  {
    title: "API gateway",
    description:
      "This is the description for Cs the de for Cardis is the description for Cs the desthe description for Cs the desthe description for Cs the desthe description for Cs the description for Cs the description for Cs the description for Card 2",
    url: "test2.html",
    img: "network.jpg",
  },
  {
    title: "QR business card",
    description:
      "This is the description for Cs the de for Cardis is the description for Cs the desthe description for Cs the desthe description for Cs the desthe description for Cs the description for Cs the description for Cs the description for Card 2",
    url: "test2.html",
    img: "qr-code.jpg",
  },
  {
    title: "Robot controler",
    description: "This is the description for Card 3",
    url: "test3.html",
    img: "raspberry-pi.jpg",
  },
];

// Get the container element where the cards will be rendered
const projectContainer = document.getElementById("project-list");

let html = "";

projects.forEach((card) => {
  html += `
    <div class="project-card"
        style="background-image:url(/assets/images/projects/${card.img})">
      <div class="card-title">
        ${card.title}
        <div class="card-description">
          ${card.description}
          <div class="card-actions">
          <a id="project"
            href="stijnvanderpouw.com/projects/${card.url}">
            More info
          </a>
          </div>
          </div>
          </div>
      </div>`;
});

projectContainer.innerHTML = html;
// TODO: disable horizontal scrolling
projectContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  projectContainer.scrollLeft += evt.deltaY;
});
