var r;
var x, y;
var b, s, e;

function setup() {
  createCanvas(400, 400);
  background(255);
  rectMode(CENTER);
  b = 100;
  s = b * 2;
  e = 3;
}

function draw() {
  // background(220);
  x = mouseX
  y = mouseY;
  smooth();

}

function mouseDragged() {
  noStroke();
  fill(0);
  rect(x, y, width / b, height / b, e);
  rect(width - x, height - y, width / b, height / b, e);
}

function mousePressed(){
noStroke();
  fill(0);
  rect(x, y, width / b, height / b, e);
  rect(width - x, height - y, width / b, height / b, e);
}