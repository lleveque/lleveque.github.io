const pagename = window.location.pathname.split("/").pop();
const day = pagename.substring(0,pagename.indexOf(".html")) || pagename;
const intDay = parseInt(day)
const lock = new Date((new Date('2023-12-' + day)).toDateString());
const square = document.getElementById("square")
const transport = document.getElementById("transport")
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const date = document.getElementById("date")

const today = new Date()

const g = gradients[intDay-1][0] + "(" + gradients[intDay-1][1] + ", " + gradients[intDay-1][3] + ")";

let player
if(today >= lock) {
  document.body.style.background = g;
  // square.style.background = gradients[intDay-1][0] + "(" + gradients[intDay-1][2] + ", " + gradients[intDay-1][3] + ")";
  player = new GreenAudioPlayer('#player', {'showDownloadButton': true});
  square.style.display = "block";

  transport.style.visibility = "visible";
  date.innerHTML = '<a href="./index.html">' + day + '</a>';
  if(intDay > 1) {
    previousPage = (intDay-1).toString().padStart(2,'0')
    previous.style.visibility = "visible";
    previous.innerHTML = '<a href="' + previousPage + '.html">ᐊ</a>'
  }
  date.style.visibility = "visible"
  if ((today.getDate() > intDay || today > (new Date("2023-12-25")) ) && intDay < 25) {
    nextPage = (intDay+1).toString().padStart(2,'0')
    next.innerHTML = '<a href="./' + nextPage + '.html">ᐅ</a>'
    next.style.visibility = "visible";
  }
}
else { for (p of document.querySelectorAll('#player audio')) { p.pause(); } }

function disco() { document.body.style = "background: linear-gradient(var(--gradient-angle), #d5fb81, #d7777d); animation: 3.86667s gradient-rotate linear infinite;" }