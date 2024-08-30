function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function shapeColor () {
  return color(random(255), random(255), random(255), random(100,255));
}

function getRandomDiameter(minSize, maxSize) {
  return random(20, 100); 
}

function draw() {

  const diameter = getRandomDiameter();

  background(255, 39, 46, 40);
  //noStroke();
  fill(shapeColor());

  push();
  translate(width / 2, height / 2);

  push();
  rotate(frameCount / 18);
  ellipse(50, 0, diameter);
  pop();

  push();
  rotate(-frameCount / 20);
  ellipse(100, 0, diameter);
  pop();

  push();
  rotate(frameCount / 22);
  ellipse(180, 0, diameter);
  pop();

  push();
  rotate(-frameCount / 30);
  ellipse(220, 0, diameter);
  pop();

  pop();
}
