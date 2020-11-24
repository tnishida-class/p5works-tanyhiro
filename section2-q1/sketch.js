// 小手調べ
function setup(){
  createCanvas(110,110);
  for(let i = 10; i < 110; i=i+10){
  if(i<55){
  stroke(0,0,255);
  strokeWeight(1);
  noFill();
  ellipse(55,55,i);
}
  else{
  stroke(255,0,0);
  strokeWeight(1);
  noFill();
  ellipse(55,55,i)

  }

  }
}
