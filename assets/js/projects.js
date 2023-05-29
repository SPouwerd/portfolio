const projects = [
  {
    title: "Fit Spot",
    description: "This is the description for Card 1",
    url: "fit-spot.html",
    img: "fit-spot.png",
  },
  {
    title: "api adapter",
    description:
      "This is the description for Cs the de for Cardis is the description for Cs the desthe description for Cs the desthe description for Cs the desthe description for Cs the description for Cs the description for Cs the description for Card 2",
    url: "api-adapter.html",
    img: "network.jpg",
  },
  {
    title: "QR-business card",
    description:
      "This is the description for Cs the de for Cardis is the description for Cs the desthe description for Cs the desthe description for Cs the desthe description for Cs the description for Cs the description for Cs the description for Card 2",
    url: "qr-card.html",
    img: "qr-code.jpg",
  },
  {
    title: "Robot controler",
    description: "This is the description for Card 3",
    url: "RPI-controller.html",
    img: "raspberry-pi.jpg",
  },
  {
    title: "re-design domain HBOI",
    description: "This is the description for Card 3",
    url: "hboi.html",
    img: "hboi.png",
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
            href="/projects/${card.url}">
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
