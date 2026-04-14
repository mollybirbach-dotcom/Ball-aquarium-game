//preview: python -m http.server

let ballMin = 10
let ballMax = 100

let myBalls = [];

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  background(30);
  for (let i = 0; i<50; i++){
    let radius = random(ballMin,ballMax)
    myBalls.push(new Ball(random(radius, width-radius), random(radius,height- radius), radius));
  }
}

function draw() {
  background(30);
  for (let i = 0; i < myBalls.length; i++) {
    myBalls[i].update();     // Calculate physics   
    myBalls[i].checkEdges(); // Prevent ball from going off screen
    myBalls[i].checkKeys();  // Check for keyboard input
    myBalls[i].display();    // Draw the ball
  }
}

class Ball {
  constructor(x, y, r,) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(0), random(15));
    this.acc = createVector (random(0), random(100));
    this.radius = r;
    this.topSpeed = 6;
    this.friction = 0.96; 
    this.red = random(255);
    this.green = random(255)
    this.blue = random(255);
   
  }
  checkEdges() {
    if(this.pos.x>width-this.radius){
      this.vel.x *= -1;
    } else if(this.pos.x < 0 + this.radius){
      this.vel.x *= -1;
    }
    if(this.pos.y>height-this.radius){
      this.vel.y *= -1;
    }else if(this.pos.y < 0 + this.radius){
      this.vel.y *= -1;
    }
  }

  // Method to check keyboard input and apply forces
  checkKeys() {
    let forceMagnitude = 12;
    
    if (keyIsDown(LEFT_ARROW))  this.applyForce(createVector(-forceMagnitude, 0));
    if (keyIsDown(RIGHT_ARROW)) this.applyForce(createVector(forceMagnitude, 0));
    if (keyIsDown(UP_ARROW))    this.applyForce(createVector(0, -forceMagnitude));
    if (keyIsDown(DOWN_ARROW))  this.applyForce(createVector(0, forceMagnitude));
  }

  // The "Force" pattern: Force adds to Acceleration
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    // 1. Acceleration changes Velocity
    this.vel.add(this.acc);
    
    // 2. Limit the speed so it doesn't go infinite
    this.vel.limit(this.topSpeed);
    
    // 3. Velocity changes Position
    this.pos.add(this.vel);
    
    // 4. Apply friction (velocity decay)
    this.vel.mult(this.friction);
    
    // 5. Reset acceleration for the next frame
    this.acc.mult(0);
  }

  display() {
    fill(this.red, this.green, this.blue);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius);
  }
}
