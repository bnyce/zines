function setup() {
  w = min(windowWidth, windowHeight)
  createCanvas(w, w);

  maxRecursionDepth = 4
  rad = w/5
  
  strokeJoin(ROUND)
}


function draw() {
  background(0);
  translate(w/2, w/2)

  stroke(255)
  noFill()
  strokeWeight(1)

  recursiveHexagon(0,0,maxRecursionDepth,rad)
  noLoop()
}


function drawHexagon(cX, cY, r){
  beginShape()
  for(let a = TAU/12; a < TAU + TAU/12; a+=TAU/6){
    var x1 = cX + r * cos(a)
    var y1 = cY + r * sin(a)

    vertex(x1, y1)
  }
  endShape(CLOSE)
}

function recursiveHexagon(cX, cY, depth, r){
  if(depth == 0){
    drawHexagon(cX,cY,r)
  }else{
    recursiveHexagon(cX,cY,depth-1,r/2)
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        recursiveHexagon(x,y,depth-1,r/2)
      }
    }
  }
}