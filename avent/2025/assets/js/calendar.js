fetch('calendar.json')
    .then(response => response.json()) // Parse JSON
    .then(data => buildCells(data)) // Work with JSON data
    .catch(error => console.error('Error fetching JSON:', error));

function buildCells(calendar)
{
  console.log(calendar)
  const today = new Date()

  let upperBound = (today <= new Date("2025-12-24")) ? today.getDate() : 24;

  for (var i = 0; i < upperBound; i++)
  {
    let dayString = (i+1).toString().padStart(2,'0')
    let cell = document.createElement("a");

    cell.setAttribute("style", "background: url('./assets/png/" + dayString + "-" + calendar[i].shortName + ".png');");
    cell.href = "./" + dayString + ".html" ;
    document.getElementById("calendar").appendChild(cell);
  }
}
