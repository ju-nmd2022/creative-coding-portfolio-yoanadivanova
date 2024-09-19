class Element {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = this.randomDirection();
      this.acceleration = createVector(0, 0);
      this.size = 30;
      this.mass = random(10, 100);
    }

    randomDirection() {
      let angle = random(TWO_PI);
      let speed = random(5, 25);
      return createVector(cos(angle) * speed, sin(angle) * speed);
    }
  
    applyForce(force) {
      let newForce = force.copy();
      newForce.div(this.mass);
      this.acceleration.add(newForce);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
      this.position.add(this.velocity);
  
      this.acceleration.mult(0);
    }
  
    draw() {
      fill(0, 0, 0);
      ellipse(this.position.x, this.position.y, this.size);
    }

    wallAttraction() {
      let wallForce = createVector(0, 0);
      let closestWall = Infinity;

      let leftWall = this.position.x;
      if (leftWall < closestWall) {
        closestWall = leftWall;
        wallForce = createVector(-1, 0);
      }

      let rightWall = innerWidth - this.position.x;
      if (rightWall < closestWall) {
        closestWall = rightWall;
        wallForce = createVector(1, 0);
      }

      let topWall = this.position.y;
      if (topWall < closestWall) {
        closestWall = topWall;
        wallForce = createVector(0, -1);
      }

      let bottomWall = this.position.x;
      if (bottomWall < closestWall) {
        closestWall = bottomWall;
        wallForce = createVector(0, 1);
      }

      wallForce.normalize();
      wallForce.mult(0.1 * closestWall);
      this.applyForce(wallForce);
    }}
  
  let elements = [];
  const c = 3;
  const maxElements = 20;
  let windL;
  let windR;
  
  function setup() {
    createCanvas(innerWidth, innerHeight);
    windL = createVector(25, 0);
    windR = createVector(-25, 0);
  }

  let element;
  let windToRight = false;
  let windToLeft = false;
  let windToTop = false;
  let windToBottom = false;
  
  function draw() {
    background(255, 255, 255);

  for(let i = 0; i< elements.length; i++) {
    element = elements [i];
    
    if (windToRight) {
       element.applyForce(windL);
    }

    if (windToLeft) {
      element.applyForce(windR);
   }

    element.wallAttraction();
    element.update();
    element.draw();
  
    // Check for the walls
    if (element.position.x - element.size / 2 < 0) {
      element.position.x = element.size / 2;
      element.velocity.x *= -1;
    } else if (element.position.x + element.size / 2 > width) {
      element.position.x = width - element.size / 2;
      element.velocity.x *= -1;
    }
    if (element.position.y - element.size / 2 < 0) {
      element.position.y = element.size / 2;
      element.velocity.y *= -1;
    } else if (element.position.y + element.size / 2 > height) {
      element.position.y = height - element.size / 2;
      element.velocity.y *= -1;
    }
    
  }
  }

  function mousePressed() {
    let newElement = new Element(mouseX, mouseY);
    elements.push(newElement);
    if (elements.length > maxElements) {
      elements.shift();
    }
  }

  function keyPressed () {
      if (key === 'ArrowRight') {
        windToRight = true;
      }
    }
  
    function keyReleased () {
      if (key === 'ArrowRight') {
        windToRight = false;
      }
    }

    function keyPressed () {
      if (key === 'ArrowLeft') {
        windToLeft = true;
      }
    }
  
    function keyReleased () {
      if (key === 'ArrowLeft') {
        windToLeft = false;
      }
    }