class Hexagon {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    return this;
  }

  drawTriangle(angle) {
    push();
    translate(this.x, this.y);
    rotate(PI / 6);
    const x1 = this.size *2* cos(angle);
    const y1 = this.size *2* sin(angle);
    const x2 = this.size *sqrt(3)* cos(angle + PI / 6);
    const y2 = this.size *sqrt(3)*sin(angle + PI / 6);
    fill(0);
    beginShape();
    vertex(0, 0);
    vertex(x1, y1);
    vertex(x2, y2);
    endShape();
    pop();
  }

  draw() {
    for (let a = 0; a < TWO_PI; a += TWO_PI / 6) {
      this.drawTriangle(a);
    }
  }
}

