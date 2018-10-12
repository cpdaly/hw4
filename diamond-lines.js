
function draw() {
  background(250);
  
  for (var x = 10; x>=200;x=x+10)
for (var i = 195; i<=0; i = i-10)
for (var y = 205; y<=200; y = y + 10){  
  line(i, x, y, x)
 // line(195, 10,205, 10)
  //line(180, 30,220,30)
}
}


taller.lines.js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  
  for(var x =10; x<=390; x = x +10){
    line(x, 10, x, x)
 // line(10,20,10,10)
 // line(20, 10, 20, 30)
  //line(30, 10, 30, 40)
  
  
}
}
