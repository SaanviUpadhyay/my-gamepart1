
var bg,bgImg;
var ss,ssImg;
var alien,alien1,alien2,alien3,alien4,alien5,alien6,alien7;
var gameover,gameoverImg;
var restart,restartImg;
var score=0;
var gameState="play";


function preload(){

  bgImg=loadImage("assets/bg4.webp");
  ssImg=loadImage("assets/ss2.png");

  alien1=loadImage("assets/alien1.png");
  alien2=loadImage("assets/alien2.png");
  alien3=loadImage("assets/alien3.png");
  alien4=loadImage("assets/alien4.png");
  alien5=loadImage("assets/alien5.png");
  alien6=loadImage("assets/alien6.png");
  alien7=loadImage("assets/alien7.png");

  gameoverImg=loadImage("assets/gameover.png");
  restartImg=loadImage("assets/restart.png");

  
}

function setup() {
  createCanvas(1600,700);

  bg = createSprite(800,350,1600,700);
  bg .addImage(bgImg);
  

  
  
}

function draw() {
  
  background(0);
  drawSprites();
  
  
  if (gameState==="play"){
   
  }
   if (gameState === "end") {
    
  }
  
  
  
}

