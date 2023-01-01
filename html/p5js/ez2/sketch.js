let img;
let img2;

function preload() {
  img = loadImage('amanita_cup.png');
  img2 = loadImage('mushy.png');
}

function setup() {
  myWidth = 1848
  myHeight = 2156
  createCanvas(myWidth, myHeight)
  textSize(60);
  textAlign(CENTER, CENTER)
  frames = 120
  n = frames
  frameRate(24)
  color1 = '#014631'
  background(color1)

}

function mouseClicked() {
  n = frames
}

function draw() {
  noLoop()
  n = n - 1
  if (n < 1) {
    n = frames
  }
  // text(n, myWidth / 2, myHeight / 2)

  image(img, 0, 0,924,1078); 
  image(img2,myWidth/2, 0,234,360); 
}
