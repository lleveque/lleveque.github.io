fetch('calendar.json')
    .then(response => response.json()) // Parse JSON
    .then(data => buildCells(data)) // Work with JSON data
    .catch(error => console.error('Error fetching JSON:', error));

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  var angle = (parseFloat(target.getAttribute('data-angle')) || 0) + event.da
  target.style.transform = 'rotate(' + angle + 'deg)'
  document.body.appendChild(new Text(event.da))

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
  target.setAttribute('data-angle', angle)
  // event.preventDefault()
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
let allAngleScales = new Map(); 

function buildCells(calendar)
{
  const today = new Date()

  let upperBound = (today <= new Date("2025-12-24")) ? today.getDate() : 24;

  const defaultAngleScale = { angle: 0, scale: 1 }
  // var resetTimeout

  for (var i = 0; i < upperBound; i++)
  {
    const dayString = (i+1).toString().padStart(2,'0')
    const cellId = "cell-" + dayString
    let cell = document.createElement("a");

    cell.setAttribute("class", "cell");
    cell.setAttribute("id", cellId);
    cell.setAttribute("style", "background: url('./assets/png/" + dayString + "-" + calendar.songs[i].shortName + ".png');");
    cell.href = "./" + dayString + ".html" ;
    // var gestureArea = document.getElementById('calendar')
    // var scaleElement = document.getElementById('scale-element')
    interact(cell)
      .gesturable({
        listeners: {
          start (event) {
            // let angleScale = allAngleScales.get(cellId)
            // if(!angleScale) { angleScale = defaultAngleScale }

            // angleScale.angle -= event.angle
            // allAngleScales.set(cellId, angleScale)

            // clearTimeout(resetTimeout)
            // scaleElement.classList.remove('reset')
          },
          move (event) {
            // // document.body.appendChild(new Text(event.scale))
            // let angleScale = allAngleScales.get(cellId)
            // if(!angleScale) { angleScale = defaultAngleScale }

            // var currentAngle = event.angle //+ angleScale.angle
            // var currentScale = event.scale * angleScale.scale

            // cell.style.transform =
            //   'rotate(' + currentAngle + 'deg)' // + 'scale(' + currentScale + ')'

            // // uses the dragMoveListener from the draggable demo above
            dragMoveListener(event)
          },
          end (event) {
            // let angleScale = allAngleScales.get(cellId)
            // if(!angleScale) { angleScale = defaultAngleScale }

            // angleScale.angle = angleScale.angle + event.angle
            // angleScale.scale = angleScale.scale * event.scale

            // allAngleScales.set(cellId, angleScale)

            // resetTimeout = setTimeout(reset, 1000)
            // scaleElement.classList.add('reset')
          }
        }
      })
      .draggable({
        listeners: { move: dragMoveListener }
      })

    document.getElementById("calendar").appendChild(cell);

  //   const pointerDrag = (cell) => {

  //   const move = (ev) => {
  //     cell.style.left = `${cell.offsetLeft + ev.movementX}px`
  //     cell.style.top = `${cell.offsetTop + ev.movementY}px`
  //   };
  
  //   const dragStart = (ev) => cell.setPointerCapture(ev.pointerId);
  //   const drag      = (ev) => cell.hasPointerCapture(ev.pointerId) && move(ev);
  //   const noDefault = (ev) => ev.preventDefault();
  
  //   cell.addEventListener("pointerdown", dragStart);
  //   cell.addEventListener("pointermove", drag);
  //   cell.addEventListener("touchstart", noDefault); // Instead of CSS touch-action: none;
  // }


    


    // function reset () {
    //   scaleElement.style.transform = 'scale(1)'

    //   angleScale.angle = 0
    //   angleScale.scale = 1
    // }
    }
}
