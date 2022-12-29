function setup() {
  ch_color = 'white'
  grid_size = 7


  winX = 500
  winY = 500
  createCanvas(winX, winY)
  ch = winX / grid_size
  fill(ch_color)
}

function checky(x = 0, y = 0) {
  rect(x, y, ch, ch)
}

function grid_b(grid_size, x = 0, y = 0) {
  push()
  translate(x, y)
  for (i = 0; i < grid_size; i++) {
    checky(ch * i, ch * i)
  }
  pop()
}

function draw() {
  noLoop()
  grid_b(grid_size, ch * 0)
  for (j = 0; j < grid_size; j = j + 2) {
    grid_b(grid_size, ch * j)
    grid_b(grid_size, ch * -j)
  }
}