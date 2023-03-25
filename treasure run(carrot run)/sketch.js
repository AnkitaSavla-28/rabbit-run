var gorund,carrot,rabbit,peanut,walnut,gameover;
var groundImg,carrotImg,rabbitImg,walnutImg,gameOverImg;
var treasureCollection = 0;
var peanutG,carrotG,walnutGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  groundImg = loadImage("ground.jpg");
  rabbitImg = loadAnimation("rabbit.jpg","rabbit2.jpg","rabbit3.jpg", "rabbit4.jpg");
  walnutImg = loadImage("walnut.jpg");
  peanutImg = loadImage("peanut.jpg");
  carrot = loadImage("carrot.jpeg");
  gameoverImg=loadImage("gameover.jpeg");
 //write a code to load the image named gameOver.jpg
 
}

function setup(){
  
  createCanvas(400,600);
// Moving background
  
ground=createSprite(200,200);
ground.addImage(pathImg);
ground.velocityY = 4;


//creating rabbit running
rabbit = createSprite(70,580,20,20);
raabit.addAnimation("BunnyRunning",rabbitImg);
rabbit.scale=0.08;
  

carrotG=new Group();
peanutG=new Group();
walnutGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  //code to reset the background
  if(ground.y > 400 ){
    ground.y = height/2;
  }
  
    createCarrot();
    createWalnut();
    createPeanut();

    if (carrotG.isTouching(rabbit)) {
      carrot.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (peanutG.isTouching(rabbit)) {
      peanutG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else{
      if(walnutGroup.isTouching(rabbit)) {
        gameState=END;
       
        
        carrot.destroyEach();
        peanutG.destroyEach();
        walnutGroup.destroyEach();
        
        carrotG.setVelocityYEach(0);
        peanutG.setVelocityYEach(0);
        walnutGroup.setVelocityYEach(0);
//create a sprite
gameOver=createSprite(300,100);
//add a animation for gameover
gameOver.addImage(gameOverImg)
//scale the gameover image
gameOver.scale=0.5;

       
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCarrot() {
  if (World.frameCount % 200 == 0) {
  var carrot = createSprite(Math.round(random(50, 350),40, 10, 10));
  carrot.addImage(caarotImg);
  carrot.scale=0.12;
  carrot.velocityY = 3;
  carrot.lifetime = 150;
  carrotG.add(carrot);
  }
}

function createPeanut() {
  if (World.frameCount % 320 == 0) {
  var peanut = createSprite(Math.round(random(50, 350),40, 10, 10));
  peanut.addImage(peanutImg);
  peanut.scale=0.03;
  peanut.velocityY = 3;
  peanut.lifetime = 150;
  peanutG.add(peanut);
}
}



function createWalnut(){
  if (World.frameCount % 530 == 0) {
  var walnut = createSprite(Math.round(random(50, 350),40, 10, 10));
  walnut.addImage(walnutImg);
  walnut.scale=0.1;
  walnut.velocityY = 3;
  walnut.lifetime = 150;
  walnutGroup.add(walnut);
  }
}
