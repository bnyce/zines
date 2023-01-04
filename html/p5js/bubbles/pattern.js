var bubbles = [];

function setup() {


  n = 600
  nn = 1
  mult = 3.08824
  cc = 10 * mult
  ww = 500
  hh = 500
  beats=8
  on=1
  color1 = '#a812de'
  color2 = '#ff00a8'
  color3 = '#ff3973'
  createCanvas(ww, hh)
  background(color1)
  //fill(color3)
  //noStroke()

strokeWeight(4)
stroke('white')
    for (var i = 0; i < 2; i++) {
    bubbles[i] = new Bubble(random(ww/2),random(hh/3))
  }
}
function Bubble(xx, yy) {
  this.x = xx;
  this.y = yy;
  this.r = ww/2
  this.c = 0;
  this.col = color(this.c);
  this.directionX = 1
  this.directionY = 1
  this.directionC = -1
  this.speedX = 2
  this.speedY = 1

  this.changeColor = function() {
    if(this.c >= 255) {
      this.c = 0;
    }
    this.c = this.c + 10
    this.col = color(this.c)
  };
  this.display = function() {
    fill(this.col);
    circle(this.x, this.y, this.r)
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y)
    if (d < (this.r + other.r)/2) {
      return true
    } else {
      return false
    }
  }

  this.update = function() {
  this.x = this.x + this.speedX * this.directionX 
  this.y = this.y + this.speedY * this.directionY //* random(5)

    if(this.x > ww || this.x < 0) {
      this.directionX *= -1
      this.r += 10
    }
    if(this.y > hh || this.y < 0 ) {
      this.directionY *= -1
    }  
  }
}
function mouseClicked() {
  clear()
  background(color1)
}
function draw() {
  //noLoop()
  n = n - 1
  if (n < 1) {
    n = beats
  }
for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update()
    bubbles[i].display()

    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor()
        
        bubbles[i].r = bubbles[i].r + 10
        bubbles[j].x = bubbles[j].x + 10

        if(bubbles[i].r > 300) {
          bubbles[i].r = 100
        }        
        if(bubbles[j].x > ww) {
          bubbles[j].x = 0
          bubbles[j].r = 10
        }
      }
    }
  }

//image(img, 0, 0)
//saveCanvas('pattern', 'png')
}
