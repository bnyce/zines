const hexagons = [];
function setup() {
  createCanvas(600, 400);
  const size = 20;
  let row = 0;
  let col = 0;
  const xOffset = size*0.5;
  const yOffset = size*0.5;
  const xStep = 2 * sqrt(3) * size;
  const yStep = 3 * size;
  for (let y = -yOffset; y < height+yStep+yOffset; y += yStep) {
    for (let x = -xOffset;x < width+xStep+xOffset; x += xStep) {
      const xShift = row % 2 * xStep*0.5;
      hexagons.push(new Hexagon(x+xShift, y, size));
    }
    row++;
  }
}

function draw() {
  background(220);
  for (let hexagon of hexagons) {
    hexagon.draw();
  }
  noLoop();
}
