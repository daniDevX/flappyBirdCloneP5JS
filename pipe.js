function Pipe() {
  this.x = width;
  this.y = height;
  this.bottom = random(height / 2);
  this.top = random(height / 2);
  this.w = 20;
  this.passed;
  //drawing the pipes;
  this.drawPipeOnTheCanvas = function() {
    fill(255);
    rect(this.x, this.top, this.w, this.top);
  };

  this.updatePipe = function() {
    this.x += -1.75;
  };

  this.collision = function(bird) {
    if (bird.y - 16 / 2 < this.top || bird.y + 16 / 2 > this.bottom) {
      if (bird.x + 16 / 2 > this.x && bird.x - 16 / 2 < this.x + this.w) {
        //  this.highlight = true;
        this.passed = true;
        return true;
      }
    }
    //  this.highlight = false;
    return false;
  };
}
