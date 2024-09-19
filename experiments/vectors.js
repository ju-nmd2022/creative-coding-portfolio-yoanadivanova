function setup () {
  createCanvas(innerWidth, innerHeight);
  background (10, 50, 20);
}

function draw () {
  translate (innerWidth/2, innerHeight/2);
  vector = p5.Vector.random2D();
  vector.mult(random(50, 100));

  strokeWeight(3);
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}