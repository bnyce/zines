function setup() {
  rows = 15
  size = 500
  fill('white')
  createCanvas(size, size * 2)
  ch = size / rows
  fcolor = 0
  odd = rows % 2; 
  mrows = rows;
  if(odd) {
    mrows = rows - 1;
  }
  quantity = (mrows / 2) * (mrows / 2)
  if(odd) {
     quantity = quantity + mrows
  }
  color_increment = ((255 - fcolor) / quantity) / 4
}

function chk(x = 0, y = 0) {
  push()
  translate(ch/2,ch/2)
  fill(fcolor = fcolor + color_increment)
  circle(x, y, ch)
  pop()
}

function chex(rows = 3) {
  j=0
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