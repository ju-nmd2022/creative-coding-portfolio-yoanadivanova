function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

let diameter = 10;
let plusSize = true;
let direction;

function shapeColor () {
  return color(random(100, 255), random(100, 255), random(100, 255), random(100,255));
}

function draw() {
  background(34, 39, 46, 40);
  noStroke();
  fill(shapeColor());
  

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

  if (random() > 0.5) {
    direction = 1;  
    } else {
      direction = -1;
  }

  push();
  translate(width / 2, height / 2);

  push();
  rotate(direction * frameCount / 8);
  ellipse(25, 0, diameter);
  pop();

  push();
  rotate(direction * frameCount/ 10);
  ellipse(75, 0, diameter);
  pop();

  push();
  rotate(direction* frameCount / 12);
  ellipse(125, 0, diameter);
  pop();

  push();
  rotate(direction* frameCount / 14);
  ellipse(175, 0, diameter);
  pop();

  pop();
}
