function setup() {
  createCanvas(1000, 1000);
}

const size = 5;
const divider = 5;
const numRows = 200;
const numCols = 200;

function draw() {
  background(0);
  noStroke();
  fill(255);

  // noiseSeed(0);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  noLoop();
}
