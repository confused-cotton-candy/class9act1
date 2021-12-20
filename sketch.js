var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
  box.shapeColor="pink";
}

function draw() 
{
  background(235,64,52);
 drawSprites();
 if(keyIsDown(RIGHT_ARROW)){
   box.x=box.x+5;
 }
 if(keyDown(LEFT_ARROW)){
  box.x=box.x-5;
}
if(keyIsDown(UP_ARROW)){
  box.y=box.y-5;
}
if(keyIsDown(DOWN_ARROW)){
  box.y=box.y+5;
}
}




