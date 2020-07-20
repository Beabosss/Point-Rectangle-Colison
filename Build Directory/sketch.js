function setup() {
  createCanvas(700, 700);
}

function collidePointRect(px, py, rx1, ry1, rx2, ry2){
  if (px >= rx1 && px <= rx1 + Math.abs(rx1 - rx2) && py >= ry1 && py <= ry1 + Math.abs(ry1 - ry2)){
    stroke("red")
    return true
  }
  else {
    stroke("black")
    return false  
  }
}

function draw() {
  background(220);
  let px = mouseX
  let py = mouseY
  let rx1 = 350
  let ry1 = 350
  let rx2 = 500
  let ry2 = 500
  
  rect(rx1, ry1, Math.abs(rx1 - rx2), Math.abs(ry1 - ry2))
  
  point(px, py)
  
  collidePointRect(px, py, rx1, ry1, rx2, ry2)
  
}