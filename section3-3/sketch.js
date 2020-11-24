// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  text(y, width / 3, 25);
    text(m, width / 2, 25);
    let dow = dayOfWeek(y, m, 1);
    console.log(dayOfWeekAsString(dow));
    for(let d = 0; d < daysInMonth(y, m); d++){
      // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
      text(dayOfWeekAsString(d), width / 15 * d, 50);
      text(d + 1, (width / 15 * dow) + (width / 15 * (d % 7)) , Math.floor(d / 7) * 10 + 65);
    }
  }

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  if(isLeapYear(y)){
     return 366;
   }
   else{
     return 365;
   }
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
   return isLeapYear(y) ? 29 : 28;
 }
 else if(m == 4 || m == 6 ||  m == 9　||  m == 11){
   return 30;
 }
 else{
   return 31;
 }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  //BLANK[2]  1970. 01. 01. (Thu.)
  let count = 0;
  let ds;
  if(y >= 1971){
    for(i = 1970; i < y; i++){
    count = count + daysInYear(i);
    }
    ds = count + dayOfYear(y, m, d); // ds = day sum
  }
  else{
    ds = count + dayOfYear(1970, m, d);
  }
  return ds % 7;
}

function dayOfWeekAsString(dow){
  const a = ["水", "木", "金", "土", "日", "月", "火", "水", "木", "金", "土", "日", "月", "火"];
  return a[dow];
}
