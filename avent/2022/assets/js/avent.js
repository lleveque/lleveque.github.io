const pagename = window.location.pathname.split("/").pop();
const lock = new Date('2022-12-' + pagename.substring(0,pagename.indexOf(".html")));
const square = document.getElementById("square")

let player
if(new Date() >= lock) {
  player = new GreenAudioPlayer('#player', {'showDownloadButton': true});
  square.style.display = "block";
}