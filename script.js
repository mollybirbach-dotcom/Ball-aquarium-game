let x = 100;
let y = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    fill("green")
}

function draw() {
    background(200);
    circle(x, y, 25)
}

function keyPressed() {
    if (key === 'i') {
        y -= 10;
    }
    if (key === 'j') {
        x -= 10;
    }
    if (key === 'k') {
        y += 10;
    }
    if (key === 'l') {
        x += 10;
    }
}


