let synth;

window.addEventListener("click", () => {
  synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
});

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
let inc = 0.003;

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




function draw() {
  stroke(random(255), random(255), random(255), 180);
  strokeWeight(divider * 0.5);
  point (xLine * divider, yLine * divider);

  let direction = floor(random(4));

  if (direction === 0) {
    xLine += 1;
  } else if (direction == 1) {
    xLine -= 1;
  } else if (direction == 2) {
    yLine += 1;
  } else {
    yLine -= 1;
  }
}

// window.addEventListener ('click', () => {
//   synth.start();
// }) ;

// window.addEventListener ('click', () => {
//   Tone.start();
// }) ;

