// GLOBAL VARIABLES
const palette = document.querySelectorAll('.palette')[0]
const canvas = document.querySelector('.canvas')
const pixels = document.getElementsByClassName('pixel')
const clearButton = document.getElementById('clear-button')
let currentColor;
let newRow
let pixel

// FUNCTION TO CREATE GRID OF DIVS
const createPixels = (x, y) => {
  // newRow = document.createElement('div')
  for (let i = 0; i < x; i++) {
    newRow = document.createElement('div')
    newRow.classList.add('row')
    newRow.classList.add('flex')
    canvas.append(newRow)
    for (let j = 0; j < y; j++) {
      pixel = document.createElement('div')
      pixel.classList.add('pixel')
      newRow.append(pixel)
    }
  }
}
createPixels(40, 86)

// EVENT LISTER TO GET THE COLOR OF WHATEVER IS CLICK IN THE PALETTE
palette.addEventListener('click', (event) => {
  currentColor = event.target.classList[0]
})


// THIS SECTION ALLOWS DRAWING/PAINTING FUNCTIONALITY
// THE START AND END FUNCTIONS
let dragging = false;
const start = (event) => {
  dragging = true;
  event.target.classList.add(currentColor)
  event.target.className = `pixel ${currentColor}`
}
const end = () => {
  dragging = false;
}
canvas.addEventListener('mousedown', start)
canvas.addEventListener('mousemove', (event) => {
  if (dragging === true) {
    event.target.className = `pixel ${currentColor}`
  }
})
canvas.addEventListener('mouseup', end)


// CLEAR CANVAS
const clearCanvas = () => {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].className = 'pixel'
  }
}
clearButton.addEventListener('click', clearCanvas)
