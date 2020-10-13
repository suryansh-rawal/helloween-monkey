
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var back1,back,back2,back3;
var rope,rope1;
var man_running,man_jump;
var survivalTime;
var startButton,mute,unMute,playButton,muteButton,unMuteButton;
var PLAY=1;
var END=0;
var START=2;
var gameState=START;
var playBack,path1,path2,path,path3,path4;
var shelter,net;
var animalNet,net;
var banana,food;
var score=0;
var endback,last;

function preload(){
  
  
  monkey_running =             loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  man_running = 
    loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png");
  
  jump=    loadAnimation("jump1.png","jump2.png","jump3.png","jump4.png","jump5.png","jump6.png","jump7.png","jump8.png","jump9.png","jump10.png","jump11.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  back1=loadImage("back.png");
 rope1 = loadImage("junjle_ropes.png");
  startButton =loadImage("play.png");
  mute=loadImage("mute.png");
  unMute=loadImage("unMute.png");
  playBack=loadImage("playBack.jpg");
  path1=loadImage("path1.png");
  animalNet=loadImage("animalNet.png");
  
  banana = loadImage("banana.png");
  last=loadImage("endBack.jpg");
  
  
}



function setup() {
  createCanvas(600,400);
  
  back =createSprite(300,200);
  back .addImage(back1);
  back.visible=true;
  
  
 
  
  
   back2 =createSprite(300,200);
  back2.addImage(playBack);
  back2.visible=false;
  
  
  back3=createSprite(900,200);
  back3.addImage(playBack);
  back3.visible=false;
  
      
      
      
       path=createSprite(300,200);
      path.addImage(path1);
      path.debug=true;
      path.setCollider("rectangle",-165,160,265,70);
  path.visible=false;
      
      path2=createSprite(630,200);
      path2.addImage(path1);
      path2.debug=true;
  path2.visible=false;
      path2.setCollider("rectangle",-165,160,265,70);
  
  
  
   path3=createSprite(900,220);
      path3.addImage(path1);
      path3.debug=true;
  path3.visible=false;
      path3.setCollider("rectangle",-165,160,265,70);
  
      
      path4=createSprite(1230,220);
      path4.addImage(path1);
      path4.debug=true;
  path4.visible=false;
      path4.setCollider("rectangle",-165,160,265,70);
  

  
 
   monkey = createSprite(100,100,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale =0.1;
  monkey.debug=true;
  monkey.visible=false;
      monkey.velocityY=2;
   
  
  
 
  
 
  
 
  //add code here
  

  back.velocityX=0;
  
  
  
FoodGroup=  createGroup();
  monkeyGroup=  createGroup();
 playButtonGroup=createGroup();
  muteGroup=createGroup();
  unMuteGroup=createGroup();
  netGroup=createGroup();
  endBackGroup=createGroup();
 playBack1=createGroup();
 playBack2=createGroup();
 trackGroup=createGroup();
 track2Group=createGroup();
  track3Group=createGroup();
  track4Group=createGroup();
  backgroundst = createGroup();
  backgroundst.add(back);
   monkeyGroup.add(monkey);
  
  playBack1.add(back2);
  playBack2.add(back3);
  trackGroup.add(path)
  track2Group.add(path2);
  track3Group.add(path3);
  track4Group.add(path3);
  
}

function draw() {
  background("white");
if(gameState===START){
  back.visible=true;
  playButton=createSprite(300,300);
  playButton.addImage(startButton);
  
  muteButton=createSprite(410,305);
  muteButton.addImage(mute);
  
  unMuteButton=createSprite(195,305);
   unMuteButton.addImage(unMute);
  
  playButtonGroup.add(playButton);
  muteGroup.add(muteButton);
  unMuteGroup.add(unMuteButton);
  
  
  
  if(mousePressedOver(playButton))
  {
    playButtonGroup.destroyEach();
     muteGroup.destroyEach();
    unMuteGroup.destroyEach();
    back.visible=false;
    gameState=PLAY;
  }
  
  
  
}
    if(gameState===PLAY){
      
      
     
  
      
     back2.visible=true;
      back3.visible=true;
      path.visible=true;
      path2.visible=true;
      path3.visible=true;
      path4.visible=true;
     
     monkey.velocityY = monkey.velocityY + 0.5;
     spawnFood();
      net();
      
     
      if(FoodGroup.isTouching(monkey)){
        FoodGroup.destroyEach();
        score=score+10;
      }
monkey.visible=true;
      monkey.collide(path);
      monkey.collide(path2);
      monkey.collide(path3);
      monkey.collide(path4);
      
      
      
      if (keyDown("space")&& monkey.y>=250){
      monkey.velocityY= -10;
   
  }
      
      survivalTime=0;
      back2.velocityX=-2;
      back3.velocityX=-2;
      path.velocityX=-2;
      path2.velocityX=-2;
      path3.velocityX=-2;
      path4.velocityX=-2;
      net.velocityX=-2;
      
  if(back2.x<=-300){
    back2.x=900;
    path.x=900;
    path2.x=1230;
  }
  if(back3.x<=-300){
    back3.x=900;
    path3.x=900;
    path4.x=1260;
  }
  
  
      if(netGroup.isTouching(monkey)||monkey.y>600){
        
        netGroup .setVelocityXEach=0;
        gameState=END;
        
      }
      survivalTime=Math.ceil(frameCount/frameRate());
  
    }
  if(gameState===END)
{
  survivalTime=0;
  endBack=createSprite(300,200);
  endBack.addImage(last);
  endBackGroup.add(endBack);
  back2.velocityX=0;
  back2.visible=false;
  back3.velocityX=0;
  back3.visible=false;
  path.velocityX=0;
  path.visible=false;
  path2.velocityX=0;
  path2.visible=false;
  path3.velocityX=0;
  path3.visible=false;
  path4.velocityX=0;
  path4.visible=false;
  monkey.velocityY=0;
  monkey.visible=false;
  netGroup.destroyEach();
  FoodGroup.destroyEach();
  
  FoodGroup.setVelocityXEach=0;
  
 score=0;
  
  if(keyDown("r")){
    endBackGroup.destroyEach();
    gameState=START;
  }
}
  
 function net(){
   if(frameCount%160===0){
   var net =createSprite(600,350);
  
  net.addImage(animalNet);
  net.scale=0.7;
  net.rotaion=-30;
  net.visible=true;
     net.velocityX=-2;
     netGroup.add(net);
   }
 }
  function spawnFood(){
    if(frameCount%100===0){
  var food =createSprite(600,300);
  food.x=Math.round(random(120,200));
  food.addImage(banana);
  food.scale =0.1;
      food.velocityX=-2;
     
      FoodGroup.add(food);
    }
}
  
drawSprites();
  stroke("white");
  text("SCORE : "+ score,500,30);
  stroke("pink");
  
  textSize(20);
  fill("pink");
  
  text("Survival Time  : "+ survivalTime,0,30);
  
}






