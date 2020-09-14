var bg,bgImage,invisg;
var monkey,monkeyImage;
var food,foodImage,foods;
var obstacle,obstacles,obstacleImage;
var score;

function preload(){
  bgImage = loadImage("jungle2.jpg");
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  foodImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup(){
  createCanvas(600, 300);
  bg=createSprite(0,0,400,400);
  bg.addImage("back",bgImage);
  bg.scale=1.3;
  
 score=0;
  
  monkey=createSprite(60,240,30,30);
  monkey.addAnimation("monk",monkeyImage);
  monkey.scale=0.12;
  
  invisg=createSprite(150,280,1200,20);
  invisg.visible=false;
  
  
  foods=createGroup();
  obstacles=createGroup();
}

function draw() {
  background("green");
  console.log(score) 
  monkey.debug=true;
 
  bg.velocityX=-5;
  
  if(bg.x<0){
    bg.x=bg.width/2;
    }
  
  if((keyDown("space")) && (monkey.y>210)){
    monkey.velocityY=-14;
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  if(foods.isTouching(monkey)){ score=score+2; foods.destroyEach(); }
  
  if(obstacles.isTouching(monkey)){ monkey.scale=0.12  ; obstacles.destroyEach(); }
  
  switch(score){
      case 10:monkey.scale=0.14;
      break;
      case 20:monkey.scale=0.16; 
      break;
      case 30:monkey.scale=0.18;
      break;
      case 40:monkey.scale=0.20;
    default:break;
  }
  
   monkey.collide(invisg);
  foodspawn();
  obstaclespawn();
  drawSprites();
  textSize(20)
  fill("yellow");
  text("Score:"+score,50,50)
}

function foodspawn(){
  if (frameCount % 80 === 0){
  food=createSprite(590,random(120,200),0,0);
  food.addImage("Banana",foodImage);
  food.velocityX=-5;
  food.scale=0.075;
  food.lifetime=110;
  foods.add(food);    
    
} 
}

function obstaclespawn(){
  if (frameCount % 170 === 0){ obstacle=createSprite(590,random(200,280),40,40);
  obstacle.addImage("1rStone",obstacleImage);
  obstacle.velocityX=-5;
  obstacle.scale=0.15 ;
  obstacle.lifetime=143;
  obstacles.add(obstacle);
     obstacle.debug=true;
  obstacle.setCollider("circle",0,0,100)
} 
}