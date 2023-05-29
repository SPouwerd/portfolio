const projects = [
  {
    title: "Fit Spot",
    description: "Comming soon",
    url: "fit-spot.html",
    img: "fit-spot.png",
  },
  {
    title: "api adapter",
    description:
      "Comming soon",
    url: "api-adapter.html",
    img: "network.jpg",
  },
  {
    title: "QR-business card",
    description:
      "Comming soon",
    url: "qr-card.html",
    img: "qr-code.jpg",
  },
  {
    title: "Robot controler",
    description: "Comming soon",
    url: "RPI-controller.html",
    img: "raspberry-pi.jpg",
  },
  {
    title: "re-design domain HBOI",
    description: "Comming soon",
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
          <a id="project-button"
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
