const palette = document.querySelectorAll('.palette')[0]
const canvas = document.querySelector('.canvas')
let currentColor;
let newRow
let pixel

const createPixels = (x, y) => {
  newRow = document.createElement('div')
  for (var i = 0; i < x; i++) {
    pixel = document.createElement('div')
    newRow.append(pixel)
    newRow.classList.add('row')
    pixel.classList.add('pixel')
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
createPixels(900,900)


palette.addEventListener('click', function(event){
    currentColor = event.target.classList[0]
    })


canvas.addEventListener('click', function(event){
    if(!event.target.classList.contains(currentColor)) {
      event.target.classList.add(currentColor)
    } else {
      event.target.classList.remove(currentColor)
    }
})
