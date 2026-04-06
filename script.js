
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    fill("green");
    stroke("yellow");
    b1 = new Ball();
}

function draw() {
    background(200);
    b1.update();
}

function keyPressed() {
    if (key === 'i') {
        b1.y -= 10;
    }
    if (key === 'j') {
        b1.x -= 10;
    }
    if (key === 'k') {
        b1.y += 10;
    }
    if (key === 'l') {
        b1.x += 10;
    }
}

class Ball {
    constructor(){
        this.x = 100;
        this.y = 100;
    }
    update(){
        circle(this.x, this.y, 25);
    }
}


