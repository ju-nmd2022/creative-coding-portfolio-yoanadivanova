function setup() {
  createCanvas(1000, 1000);
  frameRate(1);
}

const size = 35;
const divider = 1;
const numRows = 50;
const numCols = 50;

let plusSize = true;
let counter = 0;

function shapeColor () {
  return color(random(255), random(255), random(255));
}



function draw() {
  background(255);
  
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      noStroke();
      fill(shapeColor());
      const value = noise(x / divider, y / divider, counter) * size;

      if (random() > 0.5) {
        ellipse(size + x * size, size + y * size, value);
      } else {
        fill (0);
        rect(size + x * size, size + y * size, value, value);
      }
      
    }
  }

  counter += 0.1;

  //noLoop();
}
