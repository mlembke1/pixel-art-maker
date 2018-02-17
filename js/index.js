const palette = document.querySelectorAll('.palette')[0]
const canvas = document.querySelector('.canvas')
let currentColor;
let newRow
let pixel
let pixels = document.getElementsByClassName('pixel')

const createPixels = (x, y) => {
  newRow = document.createElement('div')
  for (var i = 0; i < x; i++) {
    pixel = document.createElement('div')
    newRow.classList.add('row')
    pixel.classList.add('pixel')
    newRow.append(pixel)
    canvas.append(newRow)
  }
  for (var i = 0; i < y; i++) {
    pixel = document.createElement('div')
    newRow.append(pixel)
    newRow.classList.add('row')
    pixel.classList.add('pixel')
    canvas.append(newRow)
  }
}
createPixels(1720,1720)


palette.addEventListener('click', function(event){
        currentColor = event.target.classList[0]
  })

let dragging = false;
const start = (event) => {
  dragging = true;
  event.target.classList.add(currentColor)
}
const end = () => {
  dragging = false;
}
canvas.addEventListener('mousedown', start)
canvas.addEventListener('mousemove', function(event){
  if(dragging === true){
  event.target.classList.add(currentColor)
  }
})
canvas.addEventListener('mouseup', end)
