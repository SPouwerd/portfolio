window.onload = () => {

    const palettes = ["red", "blue", "green", "orange"]
    const randomColor = palettes[Math.floor(Math.random() * palettes.length)];

    const div = document.getElementById("mouse-div").style;

    div.backgroundColor = randomColor;
}