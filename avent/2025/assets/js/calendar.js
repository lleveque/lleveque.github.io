const today = new Date()

let upperBound = (today <= new Date("2025-12-24")) ? today.getDate() : 24;

for (var i = 0; i < upperBound; i++) {
  let cell = document.createElement("a");
  cell.style.background = "#fff" // gradients[i][0] + "(" + gradients[i][2] + ", " + gradients[i][3] + ")";
  cell.href = "./" + (i+1).toString().padStart(2,'0') + ".html" ;
  document.getElementById("calendar").appendChild(cell);
}