let myFont;
function preload() {
  myFont = loadFont('cross.ttf');
  myFont2 = loadFont('cross2.ttf');
  myFont3 = loadFont('cross3.ttf');
}

function setup() {
  textFont(myFont);
  textSize(48);

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
  text(w, 0, 50, myWidth, 80);
  textFont(myFont2);
  text(h, 0, 95, myWidth, 80);
  textFont(myFont3);
  text(exp, 0, myHeight/3.6, myWidth, 180);
}