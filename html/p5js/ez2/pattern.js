let img
let img2
let img3
let img4
let img5
let img6
let img7

function preload() {
  img = loadImage('1ABR.png')
  img2 = loadImage('1ABRa.png')
  img3 = loadImage('1ABRb.png')
  img4 = loadImage('1ABRc.png')
  img5 = loadImage('1ABRd.png')
  img6 = loadImage('1ABRe.png')
  img7 = loadImage('1ABRf.png')
}

function setup() {
  nn = 1
  //spoonflower = 2700 // nn
  spoonflower = 4096 // nn
  myWidth = spoonflower
  w4 = myWidth/4
  myHeight = spoonflower

  createCanvas(myWidth, myHeight)
  textSize(60);
  textAlign(CENTER, CENTER)
  frames = 120
  n = frames
  frameRate(24)
  color1 = '#014631'
  background(color1)

}
function drawRect(x=0,y=0,h=100) {
  rect(x,y,w,h)
}

function drawImg(x=-90,y=-220) {
  image(img, x, y,4096/nn,4096/nn); 
 // image(img, x, y + myHeight,2700/nn,2627/nn); 
 // image(img, x + myWidth, y,2700/nn,2627/nn); 
 // image(img, x + myWidth, y + myHeight,2700/nn,2627/nn); 
}
function drawImg2(x=600,y=-900) {
  image(img2, x, y,2700/nn,2700/nn); 
  image(img2, x, y + myHeight,2700/nn,2700/nn); 
  image(img2, x + myWidth, y,2700/nn,2700/nn); 
  image(img2, x + myWidth, y + myHeight,2700/nn,2700/nn); 
}
function drawImg3(x=200,y=100) {
  image(img3, x, y,2700/nn,1793/nn); 
  image(img3, x, y + myHeight,2700/nn,1793/nn); 
  image(img3, x + myWidth, y,2700/nn,1793/nn); 
  image(img3, x + myWidth, y + myHeight,2700/nn,1793/nn); 
}
function drawImg4(x=-300,y=600) {
  image(img4, x, y,2700/nn,2700/nn); 
  image(img4, x, y + myHeight,2700/nn,2700/nn); 
  image(img4, x + myWidth, y,2700/nn,2700/nn); 
  image(img4, x + myWidth, y + myHeight,2700/nn,2700/nn); 
}
function drawImg5(x=1200,y=40) {
  image(img5, x, y,2700/nn,2700/nn); 
  image(img5, x, y + myHeight,2700/nn,2700/nn); 
  image(img5, x + myWidth, y,2700/nn,2700/nn); 
  image(img5, x + myWidth, y + myHeight,2700/nn,2700/nn); 
}
function drawImg6(x=930,y=900) {
  image(img6, x, y,2700/nn,2700/nn); 
  image(img6, x, y + myHeight,2700/nn,2700/nn); 
  image(img6, x + myWidth, y,2700/nn,2700/nn); 
  image(img6, x + myWidth, y + myHeight,2700/nn,2700/nn); 
}
function drawImg7(x=-700,y=1300) {
  image(img7, x, y,2700/nn,2700/nn); 
  image(img7, x, y + myHeight,2700/nn,2700/nn); 
  image(img7, x + myWidth, y,2700/nn,2700/nn); 
  image(img7, x + myWidth, y+myHeight,2700/nn,2700/nn); 
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
drawImg()
//drawImg2()
//drawImg3()
//drawImg4()
//drawImg5()
//drawImg6()
//drawImg7()
saveCanvas('myCanvas', 'png');
}
