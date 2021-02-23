var PLAY = 1;
var END = 0;
var gameState = PLAY;
var backgroundImage, obstacleGroup
var bear,bearImage
function preload(){
backgroundImage=loadImage("background.jpg")
 bearImage=loadImage('bear.png')
  humanImage=loadImage('fearhuman.png')
 obstaceImage=loadImage('obstacle.png') 
}

function setup() {
 createCanvas(600,450)
  background=createSprite(500,150)
  background.addImage(backgroundImage)
  
  
  bear=createSprite(150,360)
  bear.addImage(bearImage)
  bear.scale=0.5
  human=createSprite(325,350)
  human.addImage(humanImage)
  human.scale=0.2
  invisibleGround=createSprite(200,420,1000,20)
  invisibleGround.visible=false
  obstacleGroup = new Group
}

function draw() {
if(gameState === PLAY){
    background.velocityX =-5
    
    if(background.x<0){
    background.x = background.width/2;
  }
  
    
    obstacle()
    //jump when the space key is pressed
    if(keyDown("space")&& human.y >= 100) {
        human.velocityY = -12;
      
    }
    
    //add gravity
    human.velocityY = human.velocityY + 0.8
  
    
    
    if(obstacleGroup.isTouching(human)){

        
        gameState = END;
      
    }
  }
   else if (gameState === END) {
     
    
     
     
      background.velocityX = 0;
      human.velocityY = 0
      obstacleGroup.velocityX=0
 
}
 human.collide(invisibleGround)
  drawSprites();
 
  
}

function obstacle(){
  if(frameCount % 60 === 0) {
    var rock=createSprite(400,400)
    rock.addImage( obstaceImage )
    rock.velocityX = -5
    rock.scale=0.1
     obstacleGroup.add(rock)
    
   }
 }
