var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,390,20,20)
box.shapeColor = "red"
}

function draw() 
{

  background(30);
  if(keyDown("w")){
    box.position.y = box.position.y - 2
  }
  if(keyDown("a")){
    box.position.x = box.position.x - 2
  }
  if(keyDown("s")){
    box.position.y = box.position.y + 2
  }
  if(keyDown("d")){
    box.position.x = box.position.x + 2
  }
  drawSprites();
}




