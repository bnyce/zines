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

function chex(rows = 3) {
  for (j = 0; j < rows; j = j + 1) {
    push()
    translate(ch * j, ch * j)
    for (i = 1; i <= rows; i = i + 2) {
      chk(0, ch * i)
      chk(ch * i, 0)
    }
    pop()
  }
}

function draw() {
  noLoop()
  chex(rows)
}