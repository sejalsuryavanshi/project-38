var background1,backgroundImg;
var girl, girlImg
var stone,stoneImg;
var rupee,rupeeImage;
var score=0;
var invisible
var stoneGroup;
var play=1
var end=0;
var gamestate = play
var buttonImg
var button
var girl1,girl1Img
var reset, resetImg
var april, aprilImg

function preload(){

 backgroundImg=loadImage("perfect.png")
 girlImg=loadImage("hi.png")
 stoneImg=loadImage("images_a.png")
  rupeeImage=loadImage("images_no.png")
  buttonImg=loadImage("button (1).png")
  girl1Img=loadImage("pnh.png")
  resetImg=loadImage("restart.png")
  aprilImg=loadImage("april.png")
}

function setup(){
  createCanvas(500,500);
 
 
  
  background1=createSprite(250,250,10,700)
  background1.addImage(backgroundImg)
  background1.scale=1.6
  background1.velocityX=-4
  background1.x = background1.width /20;
  
 
  girl=createSprite(60,400,260,250)
  girl.addImage(girlImg)
  girl.scale=0.3
  
 /* stone=createSprite(0,460,20,20)
  stone.addImage(stoneImg)
  stone.velocityX=-7*/
  
  
  rupee=createSprite(460,460,20,20)
  rupee.addImage(rupeeImage)
  rupee.scale=0.4
 
 invisible=createSprite(250,495,700,10)
 invisible.visible=false
  
  stoneGroup=new Group();
  
  girl.setCollider("rectangle",0,0,230,girl.height);
 //girl.debug = true;
  
   button = createSprite(250,250,400,10);
  button.addImage(buttonImg)
button.scale=0.5
  button.visible=false
  
  reset=createSprite(270,150,10,10);
  reset.addImage(resetImg)
  reset.scale=0.8
  reset.visible=false;
  
  april=createSprite(50,50,10,10)
  april.addImage(aprilImg)
  april.scale=0.2
  april.visible=false;
  
  girl1= createSprite(300,390,400,10);
  girl1.addImage(girl1Img)
  girl1.scale=0.3
  girl1.visible=false

 
  
}

function draw() {
    background("grey") ;
  
  if(gamestate===play){
    
    score = score + Math.round(getFrameRate()/60);
   
  if(keyDown("space") && girl.y>=340){
    girl.velocityY=-8;
  }

 girl.velocityY=girl.velocityY+1;

 if (background1.x < 0){
      background1.x = background1.width/2;
    }


   if(stoneGroup.isTouching(girl)){  
      
    
      gamestate=end;
  }
   

spawnStone();
    
  }
  
  else if(gamestate===end){
    reset.visible = true;
    
    background1.velocityX=0; 
    girl.velocityY=0;
      
      april.visible=true
      button.visible = true;
      girl1.visible  = true;   
      stoneGroup.setLifetimeEach(-1); 
     stoneGroup.destroyEach();
    
  }
girl.collide(invisible);

if(mousePressedOver(reset)) {
     gamestate=play
     button.visible=false
     reset.visible=false
     girl1.visible=false
     april.visible=false
     score=0
     background1.velocityX=-4
    }

  
  drawSprites();
  fill (255);
  textSize(25);
   text("Score: "+ score, 360,50);
   
}


  
function spawnStone(){
  
   if(World.frameCount%100===0){
   stone=createSprite(500,475,20,20);
   stone.addImage(stoneImg);
   stone.velocityX=-4;
  
    stone.lifetime=170;
  stoneGroup.add(stone);
     stone.scale=0.68;
   //  stone.debug=true;
     stone.setCollider("circle",0,0,45);
     

 }
}





