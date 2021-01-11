var fixedRect, movingRect;
var ob1,ob2,R1,R2,R3,R4,R5;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(620, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-3
  
  R1 = createSprite(650, 100, 50, 80);
  R1.shapeColor = "blue";
  R1.debug = true;
  R1.velocityY=3
  R2 = createSprite(350, 350, 50, 80);
  R2.shapeColor = "green";
  R2.debug = true;
  R3 = createSprite(700, 440, 50, 80);
  R3.shapeColor = "green";
  R3.debug = true;
  R3.velocityX=-3;
  R4 = createSprite(200, 400, 50, 80);
  R4.shapeColor = "yellow";
  R4.debug = true;
  R4.velocityX=+3;
  R5 = createSprite(100, 400, 50, 80);
  R5.shapeColor = "green";
  R5.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(movingRect,fixedRect);
  isTouching(movingRect,R1);
  isTouching(movingRect,R2);
  isTouching(movingRect,R3);
  isTouching(movingRect,R4);
  isTouching(movingRect,R5);
  BounceOff(R1,fixedRect);
  BounceOff(R3,R4)
  drawSprites();
}
