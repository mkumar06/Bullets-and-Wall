var bullet, wall, speed, thickness;

function setup() {
  createCanvas(1600, 400);
  wall = createSprite(1500, 200, 50, height/2);
  bullet = createSprite(50, 200, 50, 5);
  speed = random(223, 321);
  thickness = random(22, 83);
  weight = random(30, 52)

  bullet.velocityX = speed;
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);
    
    if(deformation > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    if(deformation < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
  
  drawSprites();
}

function hasCollided(object1, object2){
  if(object1.x+object1.width/2 >= object2.x-object2.width/2){
    return true;
  }
  else{
    return false;
  }
}