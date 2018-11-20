var b;
var p = [];
var scr;
function setup() {
  createCanvas(400, 600);
  b = new bird();
  // scr = new Score();
}

function draw() {
  background(0);
  b.show();
  b.update();

  if (frameCount % 100 == 0) {
    p.push(new Pipe());
  }
  for (var i = 0; i < p.length; i++) {
    if (!p[i].collision(b)) {
      console.log("Passed");
    } else {
      //  alert("Nope");
    }
    p[i].drawPipeOnTheCanvas();
    p[i].updatePipe();
  }
}

function keyPressed() {
  if (key == " ") {
    b.up();
  }
}
