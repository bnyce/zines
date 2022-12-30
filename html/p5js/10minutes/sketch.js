function setup() {
  myWidth = 500
  myHeight = 500
  createCanvas(myWidth, myHeight)
  textSize(60);
  textAlign(CENTER, CENTER)
  noStroke()
  n = 601
  frameRate(1) 
  colorMode(RGB, 600)
  color1 = '#014631'
  fill('white')
  background(color1)
	lineWeight = 10
}

function drawBall(n) {
  inner = '#ffffff'
  outer = '#00000'
  fill(outer)
  ellipse(myWidth / 2, myHeight / 2, myWidth - (lineWeight * 2), myHeight - (lineWeight * 2))
}
function mouseClicked() {
  n = 601
}

function draw() {
  drawBall(n)
  n = n - 1
  fill('white')
  circle(width / 2, height / 2, 100)
  fill('black')
  text(n, myWidth / 2, myHeight / 2)
}
