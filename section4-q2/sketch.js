// テキスト「アニメーション」
let x, y, vx, vy,angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 6;
  vy = 6;
  angle = 0
}

function draw(){
  background(27, 28, 128);
  // BLANK[2] (hint: 作った star 関数を使います)
  fill(218,218,0);
  noStroke();
   x += vx
   y += vy
  angle += 0.01;
translate(x,y);
  rotate(angle);
  star(0,0,width/100,angle);


  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r,angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
