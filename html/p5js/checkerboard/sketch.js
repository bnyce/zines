function setup() {
  rows = 5
  size = 500
  fill('white')
  createCanvas(size, size)
  ch = size / rows
}

function chk(x = 0, y = 0) {
  rect(x, y, ch, ch)
}

function chex(rows, x = 0, y = 0) {
  push()
  translate(x, y)
  for (i = 0; i < rows; i++) {
    chk(ch * i, ch * i)
  }
  pop()
}

function draw() {
  noLoop()
  for (j = 1; j < rows; j = j + 2) {
    chex(rows, ch * j)
    chex(rows, ch * -j)
  }
}
