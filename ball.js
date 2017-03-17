function Ball(x, y) {
  this.postion = {x: x, y: y};
  
  this.draw = function(){
    this.postion.x++;
    this.postion.x++;
    ellipse(this.postion.x, this.postion.y, 10, 10);
  }
}

