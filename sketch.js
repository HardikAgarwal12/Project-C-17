
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var foodgroup,obstaclegroup
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,400);
  monkey = createSprite(100,330);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale =0.1;
  
  ground  = createSprite(400,370,990,20);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  foodgroup=new Group();
  obstaclegroup=new Group();

  
}


function draw() {
  background("green");
  textSize(20);
  stroke("black");
  text("Survival Time"+"  " +  survivaltime,300,100);
  if(keyDown("space")&&monkey.y>320){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnobstacles();
  spawnfood();
  monkey.collide(ground);
  if(obstaclegroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    obstaclegroup.setVelocityXEach(0);
    foodgroup.setVelocityXEach(0);
    obstaclegroup.setLifetimeEach(-1);
    foodgroup.setLifetimeEach(-1);
  }
  survivaltime=Math.ceil(frameCount/frameRate());
  console.log(monkey.y);
drawSprites();
  
}
function spawnfood(){
  if(frameCount%80===0){
    banana = createSprite(600,random(120,200),30,10);
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.1;
    foodgroup.add(banana);
    banana.lifetime=300;
  }
  
  
}
function spawnobstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(600,340,30,10);
   obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale=0.2;
    obstaclegroup.add(obstacle);
    obstacle.lifetime=300;
  }
  
}





