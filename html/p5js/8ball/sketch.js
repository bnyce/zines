function setup() {
  ww = 500
  hh = 500
  createCanvas(ww, hh)
  textSize(60)
  textAlign(CENTER, CENTER)
  beats = 8
  noStroke()
  z = 1
  frameRate(1.5) 
  c1 = '#014631'
  c2 = '#794e24'
  c3 = '#0077b6'
  fill(c2)
  lw = ww / 15
  background(c1)
}

function ballColor(n) {
  return  n == 1 ? '#fdd211'
        : n == 2 ? '#242678'
        : n == 3 ? '#e52616'
        : n == 4 ? '#35235b'
        : n == 5 ? '#fd822f'
        : n == 6 ? '#113c3b'
        : n == 7 ? '#a02422'
        : n == 8 ? '#23211b'
        : '#23211b';
}

function dBall(n) {
  fill(ballColor(n))
  ellipse(ww / 2, hh / 2, ww - (lw * 2), hh - (lw * 2))
}

function dBox() {
  fill(c3)
  if (z > 1) {
    rect(0, 0, ww / 2, lw)
  }
  if (z > 2) {
    rect(ww / 2, 0, ww / 2, lw)
  }
  if (z > 3) {
    rect(ww - lw, 0, lw, hh / 2)
  }
  if (z > 4) {
    rect(ww - lw, hh / 2, lw, hh / 2)
  }
  if (z > 5) {
    rect(ww / 2, hh - lw, ww / 2, lw)
  }
  if (z > 6) {
    rect(0, hh - lw, ww / 2, lw)
  }
  if (z > 7) {
    rect(0, hh / 2, lw, hh / 2)
  }
  if (z > 8) {
    rect(0, 0, lw, hh / 2)
  }
}

function dBox2() {
  fill(c2)
  if (z > 8) {
    rect(0, 0, ww / 2, lw)
  }
  if (z > 7) {
    rect(ww / 2, 0, ww / 2, lw)
  }
  if (z > 6) {
    rect(ww - lw, 0, lw, hh / 2)
  }
  if (z > 5) {
    rect(ww - lw, hh / 2, lw, hh / 2)
  }
  if (z > 4) {
    rect(ww / 2, hh - lw, ww / 2, lw)
  }
  if (z > 3) {
    rect(0, hh - lw, ww / 2, lw)
  }
  if (z > 2) {
    rect(0, hh / 2, lw, hh / 2)
  }
  if (z > 1) {
    rect(0, 0, lw, hh / 2)
  }
}

function draw() {
  if (z > beats) {
    background(c1)
    z = 2
  } else {
    z++
  }
  dBox2()
  dBox()
  n = z - 1
  dBall(n)
  fill('white')
  circle(ww / 2, hh / 2, 100)
  fill('black')
  text(n, ww / 2, hh / 2 + 4)
}