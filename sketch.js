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
   obstacleGroup = new Group
}

function draw() {
if(gameState === PLAY){

   
    
    background.velocityX =-5
    //scoring
    
   
    if(background.x>5){
    background.x = background.width/2;
  }
  background.velocityX=-5
    
    obstacle()
    //jump when the space key is pressed
    if(keyDown("space")&& trex.y >= 100) {
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
 

  drawSprites();
 
  
}
function obstacle(){
  if(frameCount % 60 === 0) {
    var rock=createSprite(400,300)
    rock.addImage( obstaceImage )
    rock.velocityX = -5
    rock.scale=0.1
     obstacleGroup.add(rock)
     rock.debug=true
   }