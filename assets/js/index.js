// MOUSE
body = document.body.innerHTML += '<div id="mouse-div"></div>';

// Get the follow-div element
var followDiv = document.getElementById("mouse-div");

followDiv.style.left = "-1000px";
followDiv.style.top = "-1000px";

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;

  // Center the div on the mouse position
  var halfWidth = followDiv.offsetWidth / 2;
  var halfHeight = followDiv.offsetHeight / 2;
  followDiv.style.left = x - halfWidth + "px";
  followDiv.style.top = y - halfHeight + "px";
});

window.onload = () => {
  // COLERPICKER

  const palettes = ["red", "blue", "green", "orange"];
  const randomColor = palettes[Math.floor(Math.random() * palettes.length)];

  const div = document.getElementById("mouse-div").style;

  div.backgroundColor = randomColor;
};
