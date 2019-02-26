var isOn = false;
var isFullscreenOn = false;
function activateRoom() {
  var element = document.getElementById("scalable-art");
  var roombtn = document.getElementById("roombtn");
  var roombg = document.getElementById("roombg");

  if (isOn == false) {
    element.classList.add("scaled-art");
    roombtn.classList.add("activebtn");
    roombg.classList.add("activeroom");
  } else if (isOn == true) {
    element.classList.remove("scaled-art");
    roombtn.classList.remove("activebtn");
    roombg.classList.remove("activeroom");
  }
  isOn = !isOn;
  console.log(isOn);
}

function activateFullscreen() {
  var fullscreenbtn = document.getElementById("fullscreen");
  if (isFullscreenOn == false) {
    fullscreenbtn.classList.add("activefullscreen");
  } else if (isFullscreenOn == true) {
    fullscreenbtn.classList.remove("activefullscreen");
  }
  isFullscreenOn = !isFullscreenOn;
  console.log(isFullscreenOn);
}
