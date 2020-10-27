// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 400);
  background(255);
  kobeCity(50,PI/4*5,PI/4,TWO_PI,OPEN);
}

function kobeCity(x,a,b,p,o){
  push();
  noStroke()
  ellipseMode(RADIUS);
  fill(0,150,0);
  arc(x,x,x,x,a,b,p,o);
  ellipseMode(CENTER);
  fill(255);
  arc(x,x,x+20,x+20,a-PI/8,b+PI/8,p,o);
  pop();
}
