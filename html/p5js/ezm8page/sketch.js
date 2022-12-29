function setup() {
  myWidth = 420
  myHeight = 595
  background(255);
  createCanvas(myWidth, myHeight);
  textAlign(CENTER, CENTER);
  weight = 10;
  strokeWeight(weight)
}

function draw() {
  background(255);
  noLoop()
  circle(myWidth / 2, myWidth / 2, myWidth - weight - 1)
  let w = 'width: ' + myWidth;
  let h = 'height: ' + myHeight;
  let exp = 'Sized for Electric Zine Maker 8-up pages'
  text(w, 0, 10, myWidth, 80);
  text(h, 0, 30, myWidth, 80);
  text(exp, 0, 90, myWidth, 80);
}