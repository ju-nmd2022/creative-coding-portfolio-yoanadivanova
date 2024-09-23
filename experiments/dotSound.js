    let synth;
    let cols, rows;
    let prevXLine, prevYLine; 
    let xLine, yLine;
    let grid;
    let divider = 60;
    let isToneActive = false;

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

      frameRate(3);

      
      window.addEventListener("click", () => {
        if (!isToneActive) {
          synth = new Tone.Synth().toDestination();
          Tone.start(); 
          isToneActive = true; 
        }
      });
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

    function createGrid(cols, rows) {
      let gridArray = new Array(cols);
      for (var i = 0; i < gridArray.length; i++) {
        gridArray[i] = new Array(rows);
      }
      return gridArray;
    }

    let scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];

    function draw() {
      textSize(25); 
      noStroke();
      fill(0);
      text ('Click on the screen to activate the sound.', 50, 100);

      stroke(random(255), random(255), random(255), 180);
      strokeWeight(divider * 0.5);
      point(xLine * divider, yLine * divider);

      prevXLine = xLine;
      prevYLine = yLine;

      let direction = floor(random(4));
      if (direction === 0) {
        xLine += 1;
      } else if (direction === 1) {
        xLine -= 1;
      } else if (direction === 2) {
        yLine += 1;
      } else {
        yLine -= 1;
      }

      // Constrain the position within the grid bounds
      // https://www.geeksforgeeks.org/p5-js-constrain-function/
      xLine = constrain(xLine, 0, cols - 1);
      yLine = constrain(yLine, 0, rows - 1);

      if (xLine !== prevXLine || yLine !== prevYLine) {
        playSound();
      }
    }

    function playSound() {
      if (isToneActive) { 
        let note = random(scale); 
        synth.triggerAttackRelease(note, '8n'); 
      }
    }
