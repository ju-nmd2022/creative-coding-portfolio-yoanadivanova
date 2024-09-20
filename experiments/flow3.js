//This is the course udes as a starting point:
//https://www.tylerxhobbs.com/words/flow-fields

let leftX, rightX, topY, bottomY;
let resolution, numCols, numRows;
let grid = [];
let defaultAngle;
let stepLength = 5;
let numSteps = 5;
let x, y;
let spacePressed = false;

function setup() {
  createCanvas(650, 650); 
   
  leftX = int(width * -0.5);   
  rightX = int(width * 1.5);   
  topY = int(height * -0.5);   
  bottomY = int(height * 1.5); 
  
  resolution = int(width * 0.01);
  
  numCols = (rightX - leftX) / resolution;
  numRows = (bottomY - topY) / resolution;
  
  default_angle = PI * 0.25;
  
  for (let column = 0; column < numCols; column++) {
    grid[column] = [];
    for (let row = 0; row < numRows; row++) {
      grid[column][row] = default_angle;
    }
  }

  for (let column = 0; column < numCols; column++) {
    for (let row = 0; row < numRows; row++) {
      let angle = (row / float(numRows)) * PI * 2; 
      grid[column][row] = angle;
    }
  }

  x = 100;
  y = 100;

}

function draw() {
  textSize(25);
  noStroke();
  text ('Hold the SPACE key.', 100, 100);

  background(255, 10);
  
  strokeWeight(random(0, 10)); 
  if (spacePressed) {
    stroke(0); 
  } else {
    stroke(random(255), random(255), random(255));
  }

  for (let i = 0; i < 5; i++) {  
    let x = random(width);
    let y = random(height);
    
    beginShape();
    
    for (let n = 0; n < numSteps; n++) {
      vertex(x, y);

      let x_offset = x - leftX;
      let y_offset = y - topY;
      let column_index = int(x_offset / resolution);
      let row_index = int(y_offset / resolution);
      
      column_index = constrain(column_index, 0, numCols - 1);
      row_index = constrain(row_index, 0, numRows - 1);
      
      let grid_angle = grid[column_index][row_index];

      let x_step = stepLength * cos(grid_angle)* -2;
      let y_step = stepLength * sin(grid_angle)* 2;

      x += x_step;
      y += y_step;
    }
    
    endShape();
  }
}

function keyPressed() {
  if (key === ' ') {
    spacePressed = true;
  }
}

function keyReleased() {
  if (key === ' ') {
    spacePressed = false;
  }
}
