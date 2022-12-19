const today = new Date()

if(today <= new Date("2022-12-25")) {
  for (var i = 0; i < today.getDate(); i++) {
    let cell = document.createElement("a");
    cell.style.background = gradients[i][0] + "(" + gradients[i][2] + ", " + gradients[i][3] + ")";
    cell.href = "./" + (i+1).toString().padStart(2,'0') + ".html" ;
    document.getElementById("calendar").appendChild(cell);
  }
}