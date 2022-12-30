let glitch

function setup() {
  myWidth = 396
  myHeight = 599
  createCanvas(myWidth, myHeight)
  textSize(60);
  textAlign(CENTER, CENTER)
  frames = 120
  n = frames
  frameRate(24)
  color1 = '#014631'
  background(color1)
  glitch = new Glitch();
  // glitch.pixelate(1); // hard pixel edges (pixelDensity)
  glitch.errors(false); // hide any bad data warnings
  // glitch.debug(); // show debugs - avoid if anything called in draw()
  glitch.debug(false); // hide debug
  /* load image */
  glitch.loadType('jpg'); // specify jpeg file glitching, default
  glitch.loadQuality(.4); // optionally crunch to low quality
  glitch.loadImage('Mona_Lisa.jpg'); // load image by path
  // glitch.loadImage(capture); // load existing p5.js image
  /* sample glitching functions */
  //glitch.randomBytes(100000, 'ff'); // randomize 10 bytes
  //glitch.replaceBytes(45, 127); // find + replace all
  /* build and display image */
  //glitch.pixelate(100)
  /* save image */
  //glitch.saveImage('fish_glitched.jpg'); // save raw glitched file
  // glitch.saveSafe('fish_glitched'); // save safe glitched file
  // glitch.saveCanvas('fish_glitched'); //  saves entire canvas
}

function mouseClicked() {
  n = frames
  glitch.resetBytes()
}

function draw() {
  n = n - 1
  if (n < 1) {
    n = frames
    glitch.resetBytes()
  }
  // text(n, myWidth / 2, myHeight / 2)
  //glitch.replaceBytes(45, 127); // find + replace all
  glitch.randomBytes(2);
  glitch.buildImage(); // creates image from glitched data
  image(glitch.image, 0, 0); // display glitched image
}
