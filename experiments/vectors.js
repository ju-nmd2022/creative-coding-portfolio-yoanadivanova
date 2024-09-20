function setup () {
  createCanvas(innerWidth, innerHeight);
  background (30, 0, 30);
  frameRate(15);
}

function draw () {
  translate (innerWidth/2, innerHeight/2);
  vector = p5.Vector.random2D();
  vector.mult(random(70, 300));

  strokeWeight(3);
  stroke(255, random(10, 150));
  line(0, 0, vector.x, vector.y);
}