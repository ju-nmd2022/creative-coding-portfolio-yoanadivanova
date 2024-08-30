function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

let diameter = 10;
let plusSize = true;

function draw() {
  background(34, 39, 46, 40);
  noStroke();
  

  if (plusSize) {
    diameter += 1;
    if (diameter >= 70) {
      plusSize = false;
    }
  } else {
    diameter -= 1;
    if (diameter <= 10) {
      plusSize = true;
    }
  }

  push();
  translate(width / 2, height / 2);

  push();
  fill(255, 0, 0);
  rotate(frameCount / 8);
  ellipse(25, 0, diameter);
  pop();

  push();
  fill(255, 255, 0);
  rotate(-frameCount / 10);
  ellipse(75, 0, diameter);
  pop();

  push();
  fill(0, 255,  0);
  rotate(frameCount / 12);
  ellipse(125, 0, diameter);
  pop();

  push();
  fill(0, 0, 255);
  rotate(-frameCount / 14);
  ellipse(175, 0, diameter);
  pop();

  pop();
}
