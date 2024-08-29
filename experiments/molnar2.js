function setup() {
  createCanvas(1000, 1000);
  frameRate(1);
}

const size = 100;
const layers = 25;

let counter = 0;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 0, 1, -variance, variance);
}

function shapeColor () {
  return color(random(255), random(255), random(255), random(255));
}

function drawLayers(x, y, size, layers) {
  //const half = size / 2;
  // const variance = size / 20;
  // noFill();
  // rectMode(CENTER);

  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.5) {
      continue;
    }
    const s = (size / layers) * (layers - i);
    const half = s / 2;
    const variance = half / 10;

    fill(shapeColor());

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
    // rect(x - half, y - half, s, s);
  }
}

function draw() {
  background(255, 255, 255);

  // drawLayers(100, 100, size, layers);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const padding = 5;
      drawLayers(size / 2 + x * size, size / 2 + y * size, size - padding, layers);
    }
  }

  counter += 0.1;

  //noLoop();
}
