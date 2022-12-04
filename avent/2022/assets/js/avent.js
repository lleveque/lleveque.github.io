const pagename = window.location.pathname.split("/").pop();
const day = pagename.substring(0,pagename.indexOf(".html")) || pagename;
const intDay = parseInt(day)
const lock = new Date((new Date('2022-12-' + day)).toDateString());
const square = document.getElementById("square")
const transport = document.getElementById("transport")
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const date = document.getElementById("date")

const today = new Date()

let player
if(today >= lock) {
  player = new GreenAudioPlayer('#player', {'showDownloadButton': true});
  square.style.display = "block";

  transport.style.visibility = "visible";
  date.innerHTML = day;
  if(intDay > 1) {
    previousPage = (intDay-1).toString().padStart(2,'0')
    previous.style.visibility = "visible";
    previous.innerHTML = '<a href="' + previousPage + '.html">ᐊ</a>'
  }
  date.style.visibility = "visible"
  if(today.getDate() > intDay && intDay < 25) {
    nextPage = (intDay+1).toString().padStart(2,'0')
    next.innerHTML = '<a href="./' + nextPage + '.html">ᐅ</a>'
    next.style.visibility = "visible";
  }
}