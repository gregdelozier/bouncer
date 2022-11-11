//updated ball speed - jw
var dx = 5.5
var dy = 2.0
var x = 0
var y = 0

function setup() {
  x = 0
  y = 0
  createCanvas(400, 400);
}

function draw() {
  x = x + dx
  y = y + dy
  if ((x > 400) | (x < 0)) {
    dx = -dx    
  }
  if ((y > 400) | (y < 0)) {
    dy = -dy    
  }
  background(220);

  // changed diameter to 20 - gsd
  circle(x,y,20)
}