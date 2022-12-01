const pagename = window.location.pathname.split("/").pop();
const day = pagename.substring(0,pagename.indexOf(".html")) || pagename;
const lock = new Date((new Date('2022-12-' + day)).toLocaleDateString());
const square = document.getElementById("square")

let player
if(new Date() >= lock) {
  player = new GreenAudioPlayer('#player', {'showDownloadButton': true});
  square.style.display = "block";
}