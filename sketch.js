var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obsimg;
var obsgrp;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  obsimg= loadImage("obstacle1.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,280,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,290,400,10);
  invisibleGround.visible = false;

  obsgrp= new Group();
}

function draw() {
  background(220,230,130);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  if(frameCount % 200 === 0){
    var obs= createSprite(600,270,20,20);
    obs.addImage(obsimg);
    obs.velocityX= -3;
    obs.scale= 0.5;
    obsgrp.add(obs);
    if(trex.isTouching(obs)){
      obsgrp.setVelocityEach= 0;
trex.collide(obs);
      console.log("GAME END");
      trex.velocityX=0;
      trex.velocityY=0;
    }
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
}
