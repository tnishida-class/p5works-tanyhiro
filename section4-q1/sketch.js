// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 254S);
  count = (count + 1) % cycle;
  size = constrain(count,50,200)// BLANK[1]
  ellipse(width / 2, height / 2, size);
}
