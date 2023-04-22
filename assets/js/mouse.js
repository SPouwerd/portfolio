// Get the follow-div element
var followDiv = document.getElementById("mouse-div");

followDiv.style.left = '-1000px';
followDiv.style.top = '-1000px';

document.addEventListener('mousemove', function (e) {

    // remove hidden on inital move
    // followDiv.style.display = flex

    var x = e.clientX;
    var y = e.clientY;

    // Center the div on the mouse position
    var halfWidth = followDiv.offsetWidth / 2;
    var halfHeight = followDiv.offsetHeight / 2;
    followDiv.style.left = (x - halfWidth) + 'px';
    followDiv.style.top = (y - halfHeight) + 'px';
});