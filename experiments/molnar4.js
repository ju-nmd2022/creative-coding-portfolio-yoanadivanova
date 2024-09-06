function setup() {
  createCanvas(1000, 1000);
}

const size = 100;
const layers = 25;
let velocity = [];

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 0, 1, -variance, variance);
}

function shapeColor () {
  return color(random(100, 255), random(100, 255), random(100, 255), random(255));
}

function drawLayers(x, y, size, layers) {
  noFill();
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.5) {
      continue;
    }
    const s = (size / layers) * (layers - i);
    const half = s / 2;
    const variance = half / 10;

    beginShape();
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance)
    );
    endShape(CLOSE);
  }
}

function draw() {
  background(255, 255, 255);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const padding = 5;
      drawLayers(size / 2 + x * size, size / 2 + y * size, size - padding, layers);
    }
    //this is the website where I found how to check if the number is even
      //https://www.geeksforgeeks.org/javascript-program-to-check-if-a-number-is-odd-or-even/ 
      if (y % 2 == 0) {
        fill(shapeColor);
      }else {
        fill(255);
      }
  }

  //noLoop();
}
