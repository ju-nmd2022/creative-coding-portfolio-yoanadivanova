let inc = 0.003;
let moveRight = false;
let moveLeft = false;
let moveUp = false;
let moveDown = false;

function noiseBackground() {
  let yoffset = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoffset = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let p = noise(xoffset, yoffset) * 255;
      pixels[index + 0] = p;
      pixels[index + 1] = p;
      pixels[index + 2] = p;
      pixels[index + 3] = 255;
      xoffset += inc;
    }
    yoffset += inc;
  }
  updatePixels();
}

let grid;
let cols, rows;
divider = 20;

function createGrid (cols, rows) {
  let gridArray = new Array(cols);
  for (var i = 0; i < gridArray.length; i ++) {
    gridArray[i] = new Array(rows);
  }
  return gridArray;
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  cols = floor(width / divider);
  rows = floor(height / divider);
  xLine = cols / 2;
  yLine = rows / 2;
  grid = createGrid(cols, rows);
  pixelDensity(1);
  noiseDetail(100);
  noiseBackground();
}

function draw() {
  stroke(random(255), random(255), random(255), 180);
  strokeWeight(divider * 0.5);
  point (xLine * divider, yLine * divider);

  if (moveRight) {
    xLine +=1;
  }

  if (moveLeft) {
    xLine -=1;
  }

  if (moveUp) {
    yLine -=1;
  }

  if (moveDown) {
    yLine +=1;
  }

  if (xLine >= cols) {
    xLine = 0;
  }
  if (xLine < 0) {
    xLine = cols - 1;
  }
  if (yLine >= rows) {
    yLine = 0; 
  }
  if (yLine < 0) {
    yLine = rows - 1;
  }
}

function keyPressed() {
  if (key === 'ArrowRight') {
    moveRight = true;
  } else if (key === 'ArrowLeft'){
    moveLeft = true;
  } else if (key === 'ArrowUp'){
    moveUp = true;
  } else if (key === 'ArrowDown'){
    moveDown = true;
  }
}

function keyReleased() {
  if (key === 'ArrowRight') {
    moveRight = false;
  } else if (key === 'ArrowLeft'){
    moveLeft = false;
  }else if (key === 'ArrowUp'){
    moveUp = false;
  } else if (key === 'ArrowDown'){
    moveDown = false;
  }}