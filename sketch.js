//updated ball speed - jw
var dx = 5.5
var dy = 2.0
var x = 0
var y = 0

//updated canvas size - Tim
function setup() {
  x = 0
  y = 0
  createCanvas(450, 450);
}

function draw() {
  x = x + dx
  y = y + dy
  if ((x > 450) | (x < 0)) {
    dx = -dx    
  }
  if ((y > 450) | (y < 0)) {
    dy = -dy    
  }
  background(255, 160, 122);

  // changed diameter to 20 - gsd
  circle(x,y,20)
}