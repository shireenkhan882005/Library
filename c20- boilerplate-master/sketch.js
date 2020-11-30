var mBox, fBox, aBox, cBox

function setup() {
  createCanvas(800,400);
  mBox = createSprite(400, 200, 50, 50);
  mBox.shapeColor = "blue";
  fBox = createSprite(200, 200, 50, 50);
  fBox.shapeColor = "blue";
  aBox = createSprite(400, 200, 50, 50);
  aBox.shapeColor = "blue";
  cBox = createSprite(600, 200, 50, 50);
  cBox.shapeColor = "blue";
 /* mBox.velocityY = 0;
  fBox.velocityY = 0;

  mBox.velocityX = -5;
  fBox.velocityX = 5;
  */
}

function draw() {
  background(0);

mBox.x = mouseX;
mBox.y = mouseY;

if (isTouching(mBox,aBox)){
  mBox.shapeColor = "red";
  aBox.shapeColor = "red";
}
else {
  mBox.shapeColor = "blue";
  aBox.shapeColor = "blue";
}
  drawSprites();
}