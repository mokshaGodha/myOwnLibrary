var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(100,200,50,50)
  rect1.velocityX = 12
  rect2=createSprite(800,200,50,50)
  rect2.velocityX = -12

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
bounceOff(rect1,rect2);
if (isTouching(rect1,rect2)){
  rect1.shapeColor="white"
  rect2.shapeColor="white"
} else {
  rect1.shapeColor="green"
  rect2.shapeColor="green"
}
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="white"
  fixedRect.shapeColor="white"
} else {
  movingRect.shapeColor="green"
 fixedRect.shapeColor="green"
}
  drawSprites();
}
