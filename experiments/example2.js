function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function shapeColor () {
  return color(random(100, 255), random(100, 255), random(100, 255), random(100,255));
}

function getRandomDiameter(20, 100) {
  return random(); 
}

function draw() {

  const diameter = getRandomDiameter();

  background(255, 25, 100, 40);
  //noStroke();
  fill(shapeColor());

  push();
  translate(width / 2, height / 2);

  push();
  rotate(frameCount / 20);
  ellipse(50, 0, diameter);
  pop();

  push();
  rotate(frameCount / 25);
  ellipse(100, 0, diameter);
  pop();

  push();
  rotate(frameCount / 30);
  ellipse(180, 0, diameter);
  pop();

  push();
  rotate(frameCount / 35);
  ellipse(220, 0, diameter);
  pop();

  pop();
}
