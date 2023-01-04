let img;
let img2;

function preload() {
  img = loadImage('1ABR.png');
  img2 = loadImage('mushy.png');
}

function setup() {
  myWidth = 1800
  w4 = myWidth/4
  myHeight = 1757

  createCanvas(myWidth, myHeight)
  textSize(60);
  textAlign(CENTER, CENTER)
  frames = 120
  n = frames
  frameRate(24)
  color1 = '#014631'
  background(color1)

}
function keyTyped() {
  if (key === 's') {
    save('image', 'png');
  }
}
function i4(x=0,y=0) {
  push()
  translate(x,y+20)
  image(img, 0, 0,w4,w4); 
  image(img, w4, 0,w4,w4); 
  image(img, w4, w4,w4,w4); 
  image(img, 0, w4,w4,w4); 
  pop()
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

  i4()
  i4(w4*2)
  i4(0,w4*2)
  i4(w4*2,w4*2)
   //   saveCanvas('image', 'png');

//  image(img2,myWidth/2, 0,234,360); 
}
