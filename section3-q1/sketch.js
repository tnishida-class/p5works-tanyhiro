// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",20,30);
}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent(x) + textDescent(y);
  let p = 8;
push()
noStroke()
  fill(148,87,164);
  rect(0, 0, w + p * 2, h + p * 2,20);
pop()
  fill(0,255,0);
  text(t, p, h + p);
push()
  fill(148,87,164);
  noStroke();
  triangle(w+p*2-2,h+p*2-p,w,h+p*2,w+p*2+p,h+p*2);
  pop()
}
