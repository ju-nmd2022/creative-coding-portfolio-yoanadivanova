function setup() {
  createCanvas(1000, 1000);
  frameRate(7);
}

const size = 10;
const divider = 5;
const numRows = 200;
const numCols = 200;

let counter = 0;

function shapeColor () {
  return color(random(255), random(255), random(255));
}

function draw() {
  background(255);
  

  // noiseSeed(0);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      noStroke();
      fill(shapeColor());
      const value = noise(x / divider, y / divider, counter) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  counter += 1;

  //noLoop();
}
