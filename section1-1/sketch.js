function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 255);
  triangle(15,120,116,120,116,10);
  fill(94, 196, 84);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
