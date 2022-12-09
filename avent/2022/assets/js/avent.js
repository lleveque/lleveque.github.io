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

const gradients =
  [
    ["linear-gradient", "0deg", "180deg", "#000000, #555 80%, #FFFFFF"],
    ["linear-gradient", "175deg", "175deg", "rgb(31, 12, 93) 0%, rgb(69, 29, 144) 62%, rgb(251, 255, 0) 68%, rgb(76, 91, 146) 82%, rgb(8, 19, 41) 99%, rgb(53, 64, 86) 100%"],
    ["linear-gradient", "180deg", "180deg", "rgb(242, 202, 138) 3%, rgb(135, 94, 12) 86%, rgb(3, 3, 3) 100%"],
    ["linear-gradient", "-65deg", "65deg", "#001030 40%, #becb6c"],
    ["linear-gradient", "102deg", "142deg", "rgb(190, 180, 171) 0%, rgb(245, 240, 221) 1%, rgb(254, 255, 253) 34%, rgb(140, 57, 23) 39%, rgb(209, 160, 65) 49%, rgb(255, 252, 49) 53%, rgb(243, 249, 101) 60%, rgb(254, 254, 254) 61%, rgb(253, 250, 231) 100%"],

    ["linear-gradient", "-65deg", "65deg", "#fd51a0, #24eacc"],
    ["linear-gradient", "65deg", "-65deg", "rgb(127, 181, 255) 0%, rgb(134, 185, 255) 59%, rgb(0, 0, 0) 65%, rgb(119, 195, 255) 73%, rgb(76, 137, 255) 100%"],
    ["linear-gradient", "-65deg", "65deg", "#bfa1f0, #e5663f"],
    ["linear-gradient", "179deg", "180deg", "rgb(127, 181, 255) 0%, rgb(255, 219, 134) 75%, rgb(221, 149, 32) 84%, rgb(15, 146, 0) 88%, rgb(163, 225, 55) 100%"],
    ["linear-gradient", "100deg", "65deg", "#fff 17%, rgb(139, 73, 0) 22%, rgb(139, 73, 0) 26%, #fff 28%, #fff 50%, rgb(128, 73, 0) 53%, rgb(174, 100, 0) 61%, #fff 62%, rgb(203, 202, 200) 70%, rgb(174, 100, 0) 83%, #fff 88%, #fff 93%, rgb(159, 92, 0) 95%"],

    ["linear-gradient", "-65deg", "65deg", "#000 10%, #fe12b8 40%, #e0fdd2 110%"],
    ["linear-gradient", "65deg", "160deg", "rgb(238, 218, 190) 35%, rgb(103, 103, 97) 73%, rgb(222, 204, 179) 94%"],
    ["conic-gradient", "from 180deg", "from 0deg", "red, orange, yellow, green, blue"],
    ["conic-gradient", "from 175deg at 10% 50%", "from 0deg at 75% 25%", "orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange, white, white, orange, orange"],
    ["linear-gradient", "-65deg", "65deg", "#1869e6, #6fac0c"],

    ["linear-gradient", "-65deg", "65deg", "#59da8d, #eaa4fc"],
    ["linear-gradient", "-65deg", "65deg", "#c90dc3, #e5af07"],
    ["linear-gradient", "180deg", "180deg", "rgb(0, 7, 229) 40%, rgb(255, 255, 0) 60%"], //#771629, #1d2cdf
    ["linear-gradient", "-65deg", "65deg", "#fd7b64, #5ce0ed"],
    ["linear-gradient", "-50deg", "90deg", "rgb(0, 0, 0) 10%, rgb(0, 7, 229) 22%, rgb(0, 0, 0) 31%, rgb(0, 0, 0) 40%, rgb(255, 255, 0) 48%, rgb(0, 0, 0) 54%, rgb(0, 0, 0) 59%, rgb(255, 0, 0) 65%, rgb(0, 0, 0) 70%, rgb(0, 0, 0) 82%, rgb(0, 189, 6) 89%, rgb(0, 0, 0) 100%"], //#464788, #58f8eb

    ["linear-gradient", "-65deg", "65deg", "#ecfaef, #0b8a4b"],
    ["linear-gradient", "-65deg", "65deg", "#fd7b64, #5ce0ed"],
    ["linear-gradient", "-65deg", "65deg", "#5d5ca4, #d18eeb"],
    ["linear-gradient", "-65deg", "65deg", "#d5fb81, #d7777d"],
    ["linear-gradient", "-65deg", "65deg", "#dafe33, #08cde3"]
  ]

const g = gradients[intDay-1][0] + "(" + gradients[intDay-1][1] + ", " + gradients[intDay-1][3] + ")";

let player
if(today >= lock) {
  document.body.style.background = g;
  square.style.background = gradients[intDay-1][0] + "(" + gradients[intDay-1][2] + ", " + gradients[intDay-1][3] + ")";
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
  if((today.getDate() > intDay) && intDay < 25) {
    nextPage = (intDay+1).toString().padStart(2,'0')
    next.innerHTML = '<a href="./' + nextPage + '.html">ᐅ</a>'
    next.style.visibility = "visible";
  }
}
else { for (p of document.querySelectorAll('#player audio')) { p.pause(); } }