function bird() {
  this.x = 25;
  this.y = height / 2;
  this.gravity = 0.3;
  this.speed = 0;
  this.force = 5;
  this.friction = 0.2;

  //display the flappy bird
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  };

  //making the gravity work on the ball
  this.update = function() {
    this.speed += this.gravity;
    this.y += this.speed;

    if (this.y > height) {
      this.y = height;
      this.speed = 0;
    }
    if (this.y <= 0) {
      this.speed = 0;
      this.y = 0;
    }
  };

  this.up = function() {
    this.speed -= this.force - this.friction;
  };
}
