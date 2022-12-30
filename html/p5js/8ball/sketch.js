function setup() {
  myWidth = 500
  myHeight = 500
  createCanvas(myWidth, myHeight)
  textSize(60);
  textAlign(CENTER, CENTER)
  beats = 8
  noStroke()
  z = 1
  frameRate(1.5)
  colorMode(RGB, beats)
  color1 = '#014631'
  color2 = '#794e24'
  color3 = '#0077b6'
  fill(color2)
  lineWeight = myWidth / 15
  background(color1)
}

function drawBall(n) {
  inner = '#ffffff'
  if (n == '1') {
    outer = '#fdd211';
  }
  if (n == '2') {
    outer = '#242678';
  }
  if (n == '3') {
    outer = '#e52616';
  }
  if (n == '4') {
    outer = '#35235b';
  }
  if (n == '5') {
    outer = '#fd822f';
  }
  if (n == '6') {
    outer = '#113c3b';
  }
  if (n == '7') {
    outer = '#a02422';
  }
  if (n == '8') {
    outer = '#23211b';
  }
  fill(outer)
  ellipse(myWidth / 2, myHeight / 2, myWidth - (lineWeight * 2), myHeight - (lineWeight * 2))
}

function drawBox() {
  fill(color3)
  if (z > 1) {
    rect(0, 0, width / 2, lineWeight)
  }
  if (z > 2) {
    rect(width / 2, 0, width / 2, lineWeight)
  }
  if (z > 3) {
    rect(width - lineWeight, 0, lineWeight, height / 2)
  }
  if (z > 4) {
    rect(width - lineWeight, height / 2, lineWeight, height / 2)
  }
  if (z > 5) {
    rect(width / 2, height - lineWeight, width / 2, lineWeight)
  }
  if (z > 6) {
    rect(0, height - lineWeight, width / 2, lineWeight)
  }
  if (z > 7) {
    rect(0, height / 2, lineWeight, height / 2)
  }
  if (z > 8) {
    rect(0, 0, lineWeight, height / 2)
  }
}

function drawBox2() {
  fill(color2)
  if (z > 8) {
    rect(0, 0, width / 2, lineWeight)
  }
  if (z > 7) {
    rect(width / 2, 0, width / 2, lineWeight)
  }
  if (z > 6) {
    rect(width - lineWeight, 0, lineWeight, height / 2)
  }
  if (z > 5) {
    rect(width - lineWeight, height / 2, lineWeight, height / 2)
  }
  if (z > 4) {
    rect(width / 2, height - lineWeight, width / 2, lineWeight)
  }
  if (z > 3) {
    rect(0, height - lineWeight, width / 2, lineWeight)
  }
  if (z > 2) {
    rect(0, height / 2, lineWeight, height / 2)
  }
  if (z > 1) {
    rect(0, 0, lineWeight, height / 2)
  }
}

function draw() {
  if (z > beats) {
    background(color1)
    z = 2
  } else {
    z++
  }
  drawBox2()
  drawBox()
  n = z - 1
  drawBall(n)
  fill('white')
  circle(width / 2, height / 2, 100)
  fill('black')
  text(n, myWidth / 2, myHeight / 2)
}
