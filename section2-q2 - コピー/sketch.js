// チェッカー
function setup() {
  createCanvas(200, 200);
  let size=width/8
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
if(i%2==0&&j%2==0){
fill(255);
}
else if (i%2==1&&j%2==1) {
fill(255)
}
else{
fill(196);
}
rect(size*i,size*j,size,size)
}
}
for(let x=0;x<8;x++){
  for(let y=0;y<3;y++){
if(x%2==1&&y%2==0){
fill(255,0,0);
ellipse(size*x+size/2,size*y+size/2,size);
}
else if (x%2==0&&y%2==1) {
fill(255,0,0);
ellipse(size*x+size/2,size*y+size/2,size);
}
else{

}
  }
}
for(let a=0;a<8;a++){
  for(let b=5;b<8;b++){
if(a%2==1&&b%2==0){
fill(0);
ellipse(size*a+size/2,size*b+size/2,size);
}
else if(a%2==0&&b%2==1){
fill(0);
ellipse(size*a+size/2,size*b+size/2,size);
}
else{

}
  }
}

}
