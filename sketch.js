function setup(){
  createCanvas(windowWidth, windowHeight);  
}

function Ball(x, y) {
  
  this.postion = {x: x, y: y};
  this.speed =  {x:(-5,5)}, {y:(-5,5)},
  this.size = {z:random(5,20)};
  this.transparant = {t:random(50,150)}
  this.red ={r:random(150,255)}
  this.green = {g:random(0,25)}
  this.blue = {b:random(0,25)}

  this.draw = function(){
    this.postion.x = this.postion.x + this.speed.x  ;
    this.postion.y = this.postion.y + this.speed.y  ;
    this.size.z = this.size.z + .5;
    this.transparant.t = this.transparant.t - .1;
    
    noStroke();
    ellipse(this.postion.x, this.postion.y, this.size.z, this.size.z);
    fill(this.red.r,this.green.g,this.blue.b,this.transparant.t);
  }
}

  var balls =[]
function mouseMoved(){
var ball = new Ball(mouseX, mouseY);
balls.push(ball);
}

function draw() {
  background(100);
  for(var i = 0; i < balls.length; i++) {
  balls[i].draw();
  }
    print(frameCount);
}
 
 // print(frameCount);
