const projects = [
  {
    title: "Card 1",
    description: "This is the description for Card 1",
    image: "card1.jpg",
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2",
    image: "card2.jpg",
  },
  {
    title: "Card 3",
    description: "This is the description for Card 3",
    image: "card3.jpg",
  },
];
// Get the container element where the cards will be rendered
const container = document.getElementsByClassName("project-list");

// Loop through the cards and create HTML elements dynamically
projects.forEach((card) => {
  // Create a div element for the card
  const cardElement = document.createElement("div");
  cardElement.classList.add("project-card");

  // Create an image element
  const imageElement = document.createElement("img");
  imageElement.src = card.image;
  cardElement.appendChild(imageElement);

  const titleElement = document.createElement("div");
  titleElement.classList.add("project-title");

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("project-description");

  // Append the card element to the container
  container.appendChild(cardElement);
});
