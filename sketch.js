//updated ball speed - jw
var dx = 5.5
var dy = 2.0
var x = 0
var y = 0

//updated canvas size - Tim
function setup() {
  x = 0
  y = 0
  createCanvas(500, 500);
}

function draw() {
  x = x + dx
  y = y + dy
  if ((x > 500) | (x < 0)) {
    dx = -dx    
  }
  if ((y > 500) | (y < 0)) {
    dy = -dy    
  }
  background(255, 160, 122);

  // changed diameter to 20 - gsd
  circle(x,y,20)
}