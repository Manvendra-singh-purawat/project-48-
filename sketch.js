var backgroundImage;
var backdrop;
var girl;
var girl1;
var boy;
var boy1;
var family;
var family1;
var coronagroup;
var Coronavirus;
var reset1;
var reset;
var covidGroup;
var gameOver, restart;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload() {
  backgroundImage = loadImage("Background.jpg");
  family1 = loadImage("Family2.png");
  girl = loadImage("Girl.png");
  coronagroup = loadImage("Coronavirus2.png");
}

function setup() {
  createCanvas(1200,800);
  backdrop = createSprite(600,400,1200,800);
  backdrop.addImage(backgroundImage);
  backdrop.scale = 3;

  family = createSprite(1100,600,20,20);
  family.addImage(family1);
  family.scale = 0.4;

  girl1 = createSprite(40,700,20,20);
  girl1.addImage(girl);
  girl1.scale = 0.5;


 

   CovidGroup = new Group();

  
  

 

}


function draw () {
  //background("red");
  if(gameState = (PLAY)){
    if(keyDown("RIGHT_ARROW")){
      girl1.x = girl1.x+10;
    }
   
    if(keyDown("LEFT_ARROW")){
      girl1.x = girl1.x-10;
    }
  
  
  }
  
  if(CovidGroup.isTouching(girl1)){
  
    girl1.x = 0;
 
    
  }
  
  
  
    CoronavirusCells();
    drawSprites();
}

function CoronavirusCells() {

 

  if (World.frameCount % 15 === 0) { 
    var Coronavirus = createSprite(200,0,20,20);  
     var rand = Math.round(random(1,4));
    Coronavirus.scale = 0.20;
    Coronavirus.x = Math.round(random(10,1200));
    Coronavirus.velocityY = 5;
    Coronavirus.lifetime = 145;
    Coronavirus.addImage(coronagroup);
    CovidGroup.add(Coronavirus);
  }



}