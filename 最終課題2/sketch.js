let x, y, vx, vy, d, vd, g, hx, hy, hd, hg;

function setup(){
  createCanvas(windowWidth, windowHeight);
  keyPressed();
  reset();
}

function reset (){
  x = width / 3;
  y = height / 3;
  d = 30
  vx = 0
  vy = 0
  vd = 0
  g = 0
  hx = 0
  hy = 0
  hg = 0
  hd = 0
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, d);

  if (d <= 7) {
    x += 0;
    y += 0;
    d += 0;
  }

  else if (d <= 15){
    x += vx + hx;
    y += vy + hy;
    vy += g + hg;
    d -= vd + hd;
  }

  else if (d <= 30 ) {
    x += vx;
    y = y + vy;
    vy += g;
    d -= vd;
}





}

  //if(keyIsDown("A".charCodeAt(0))){
    //x += -vx
//}
function keyPressed(){
    if (key == "w") {
    vd = 0.7000001;
    hd = -0.1;
    vy = 0;
    g = 0.12;
    hx = 0
    hy = 0
    hg = 0
    vx = 10;
    }

    else if (key == "a") {
    vd = 0.6;
    hd = -0.2;
    vy = 0;
    hy = 0.2
    hg = 0.25
    g = 0.12;
    vx = 8;
    }

    else if (key == "s") {
    vd = 0.6;
    hd = 0.2;
    vy = 0.7;
    hy = 0.02
    g = 0.15;
    hg = -0.05
    vx = 10;
    hx = -5
  }

  else if (key == "d"){
    vd = 0.7
    hd = 0.1
    vy = 0
    g = 0.12
    vx = 10
    hx = 3
    hy = 0
    hg = 0.02
  }


    else if (key == " "){ reset();}
  }
  //if (keyIsDown("D".charCodeAt(0))){
    //x += vx
  //}
  //if (keyIsDown("S".charCodeAt(0))){
    //y += vy
  //}

function windowResized(windowWidth, windowHeight){
}
