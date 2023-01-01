//this variable will hold our shader object
let theShader;
let shaderTexture;

function preload(){
  // a shader is composed of two parts, a vertex shader, and a fragment shader
  // the vertex shader prepares the vertices and geometry to be drawn
  // the fragment shader renders the actual pixel colors
  // loadShader() is asynchronous so it needs to be in preload
  // loadShader() first takes the filename of a vertex shader, and then a frag shader
  // these file types are usually .vert and .frag, but you can actually use anything. .glsl is another common one
  theShader = loadShader('texcoo.vert', 'shader.frag');
  }

function setup() {
  myWidth = 420
  myHeight = 595
  createCanvas(myWidth, myHeight, WEBGL)
  noStroke()

  borderWidth = 20

  shaderTexture = createGraphics(myWidth, myHeight, WEBGL)
  shaderTexture.noStroke();
}
function drawPage() {
    shader(theShader)
    rect(borderWidth,borderWidth,myWidth,myHeight)
}
function drawPage2() {
    shader(theShader)
    rect(borderWidth,borderWidth,myWidth-borderWidth*2,myHeight-borderWidth*2)
}
function draw() {
  //noLoop()
    theShader.setUniform('u_resolution', myWidth, myHeight);
    shaderTexture.shader(theShader);
    shaderTexture.rect(-myWidth/2,-myHeight/2,myWidth-borderWidth*2,height-borderWidth*2);
    background('white')
    texture(shaderTexture);
    rect(borderWidth-myWidth/2,borderWidth-myHeight/2,myWidth-borderWidth*2,myHeight-borderWidth*2)
  glitch.randomBytes(2);
  glitch.buildImage(); // creates image from glitched data
  image(glitch.image, 0, 0); // display glitched image

}