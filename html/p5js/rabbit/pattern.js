
function setup() {
  n = 600
  nn = 1
 // mult = 3.08823529
  mult = 3.08824
  cc = 10 * mult
  ww = cc * 102
  hh = cc * 34
  beats=8
  on=1
  color1 = '#a812de'
  color2 = '#ff00a8'
  color3 = '#ff3973'
  createCanvas(ww, hh)
  background(color1)
  fill(color3)
  noStroke()
}
function sRabbit(x=0,y=0) {
push()
translate(x,y)
beginShape();
vertex(9*cc,0*cc);
vertex(9*cc,2*cc);
vertex(8*cc,2*cc);
vertex(8*cc,3*cc);
vertex(7*cc,3*cc);
vertex(7*cc,5*cc);
vertex(5*cc,5*cc);
vertex(5*cc,4*cc);
vertex(6*cc,4*cc);
vertex(6*cc,2*cc);
vertex(7*cc,2*cc);
vertex(7*cc,0*cc);
vertex(5*cc,0*cc);
vertex(5*cc,1*cc);
vertex(4*cc,1*cc);
vertex(4*cc,6*cc);
vertex(3*cc,6*cc);
vertex(3*cc,7*cc);
vertex(2*cc,7*cc);
vertex(2*cc,8*cc);
vertex(1*cc,8*cc);
vertex(1*cc,10*cc);
vertex(0*cc,10*cc);
vertex(0*cc,11*cc);
vertex(1*cc,11*cc);
vertex(1*cc,12*cc);
vertex(3*cc,12*cc);
vertex(3*cc,11*cc);
vertex(5*cc,11*cc);
vertex(5*cc,16*cc);
vertex(4*cc,16*cc);
vertex(4*cc,18*cc);
vertex(5*cc,18*cc);
vertex(5*cc,17*cc);
vertex(7*cc,17*cc);
vertex(7*cc,19*cc);
vertex(6*cc,19*cc);
vertex(6*cc,21*cc);
vertex(5*cc,21*cc);
vertex(5*cc,22*cc);
vertex(7*cc,22*cc);
vertex(7*cc,20*cc);
vertex(8*cc,20*cc);
vertex(8*cc,19*cc);
vertex(9*cc,19*cc);
vertex(9*cc,17*cc);
vertex(10*cc,17*cc);
vertex(10*cc,15*cc);
vertex(11*cc,15*cc);
vertex(11*cc,12*cc);
vertex(11*cc,10*cc);
vertex(9*cc,10*cc);
vertex(9*cc,11*cc);
vertex(7*cc,11*cc);
vertex(7*cc,10*cc);
vertex(6*cc,10*cc);
vertex(6*cc,9*cc);
vertex(7*cc,9*cc);
vertex(7*cc,7*cc);
vertex(8*cc,7*cc);
vertex(8*cc,6*cc);
vertex(9*cc,6*cc);
vertex(9*cc,5*cc);
vertex(10*cc,5*cc);
vertex(10*cc,0*cc);

beginContour();
vertex(3*cc,8*cc);
vertex(4*cc,8*cc);
vertex(4*cc,9*cc);
vertex(3*cc,9*cc);
endContour();

endShape(CLOSE);
rect(9*cc,7*cc,cc,cc)
pop()
}
function hvRabbit() {
  push()
  translate(-24*cc,4*cc)
  hRabbit(-6*cc,-16*cc)
  hRabbit()
  hRabbit(6*cc,16*cc)
  hRabbit(12*cc,32*cc)
  hRabbit(18*cc,48*cc)
  pop()
}
function hRabbit(x=0,y=0) {
  push()
  translate(x,y)
  for(i=0;i<22;i++) { 
     sRabbit(cc*i*12,-cc*i*2)
  }
  pop()
}

function draw() {
  noLoop()
  n = n - 1
  if (n < 1) {
    n = beats
  }
//image(img, 0, 0)

hvRabbit()
//saveCanvas('pattern', 'png')
}
