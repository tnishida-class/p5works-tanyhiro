// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(240, 180);
  background(0,0,255);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 120 + cos(theta) * 50;
    let y = 90 + sin(theta) * 50;
    star (x, y, 10);
  }
}

function star(x,y,r){
  stroke (255,255,255)
  strokeWeight(1)
  fill(255,255,0);
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const p = x + cos(theta) * r;
    const q= y + sin(theta) * r;
    vertex(p, q);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
