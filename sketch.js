var jungleImage, jungle, monkey, monkey_running, score, food, ground, foodImage, bananaGroup, stone, stoneImage, obstaclesGroup;

var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
 jungleImage = loadImage("jungle.jpg");
   
  foodImage = loadImage("banana.png");
  
  stoneImage = loadImage("stone.png");
  
 monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png"); 
}
function setup() {
  createCanvas(650, 400);
  
 jungle = createSprite(0, 0,800, 400);
  jungle.addImage("jungle",jungleImage); 
  jungle.scale = 1.5;
  jungle.x = jungle.width/2;
  jungle.velocityX = -8;
  
  monkey = createSprite(100, 350, 20, 20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.3;
 
  ground = createSprite(325, 415, 700 ,10);
  ground.visible = false;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  
  if (jungle.x < 0 ){
    jungle.x = jungle.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -14;
  }
  
   if(bananaGroup.isTouching(monkey)){
  score = score+2;
     bananaGroup.destroyEach();
  }
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.2;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  food();
  obstacles();
  
  switch(score){
    case 20: monkey.scale = 0.4;
      break;
    case 40: monkey.scale = 0.6;
      break;  
    case 60: monkey.scale = 0.8;
      break;
    case 80: monkey.scale = 0.10;
      break;
      default:break;
  }
  drawSprites();
 
  stroke("white");
  textSize(20);
  fill("white");
  text("Survival Time:" + score, 450, 50);
}
 
function food(){

  if (frameCount % 100 === 0) {
  var food = createSprite(650, random(80, 200), 20, 20)
  food.addImage("banana", foodImage);
    food.scale = 0.1;
    food.velocityX = -8;
    
    bananaGroup.add(food);
    }
  }

function obstacles(){
if (frameCount % 120 === 0) {
  var stone = createSprite(650, 350, 20, 20)
  stone.addImage("stone", stoneImage);
    stone.scale = 0.3;
   stone.velocityX = -8;

  obstaclesGroup.add(stone)
}
}
